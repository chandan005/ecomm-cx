import { extname } from 'path';
import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { S3Service } from '../../infra/s3/S3.Service';
import { Nullable } from '../../lib/types/Nullable';
import { DocumentRepository } from './Document.Repository';

import { CreateDocumentDto } from './dto/CreateDocumentDto';
import { GetPresignedUrlDto } from './dto/GetPresignedUrlDto';
import { SignedUrlResponseDto } from './dto/SignedUrlResponseDto';
import { Document } from './entities/Document.Entity';

@Injectable()
export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly s3Service: S3Service,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async create(createDocumentDto: CreateDocumentDto): Promise<Document> {
    try {
      const document: Nullable<Document> = await this.documentRepository.createDocument({
        ...createDocumentDto,
      });

      if (!document) {
        throw new BadRequestException(`Exception creating document.`);
      }
      return document;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(`Error creating document.`);
    }
  }

  async findOne(id: number): Promise<Document> {
    try {
      const document = await this.documentRepository.findDocument(id);

      if (!document) {
        throw new NotFoundException(`Document with id ${id} not found.`);
      }
      return document;
    } catch (err) {
      throw new BadGatewayException(`Document with id ${id} not found.`);
    }
  }

  async upload(file: Express.Multer.File): Promise<void> {
    try {
      if (!file) {
        throw new BadRequestException('No file uploaded');
      }

      const ext = extname(file.originalname).toLowerCase();
      if (ext !== '.csv') {
        throw new BadRequestException('Only CSV files are allowed');
      }

      await this.s3Service.uploadToS3(file.originalname, file.buffer);
    } catch (err) {
      throw new BadRequestException(err.message || 'Failed to upload CSV');
    }
  }

  /**
   *
   * @param getPresignedUrlForCompanyDto
   * @param isLogo
   */
  async generatePresignedUrl(
    getPresignedUrlDto: GetPresignedUrlDto,
  ): Promise<SignedUrlResponseDto> {
    if (
      getPresignedUrlDto.expirationTimeInSeconds &&
      getPresignedUrlDto.expirationTimeInSeconds > 1800
    ) {
      getPresignedUrlDto.expirationTimeInSeconds = 1800;
    }
    const key = `${getPresignedUrlDto.fileName}`;

    try {
      const signedUrl = await this.s3Service.generateSignedUrl(
        process.env.S3_DOCUMENTS_BUCKET_NAME || '',
        key,
        getPresignedUrlDto.operationType,
        getPresignedUrlDto.contentType,
        getPresignedUrlDto.expirationTimeInSeconds,
      );

      const signedUrlResponse: SignedUrlResponseDto = {
        operationType: getPresignedUrlDto.operationType,
        signedUrl,
        expirationTimeInSeconds: getPresignedUrlDto.expirationTimeInSeconds,
      };
      return signedUrlResponse;
    } catch (err) {
      console.error(err);
      throw new BadRequestException(
        `Error generating signed url for fileName ${getPresignedUrlDto.fileName}`,
      );
    }
  }
}
