/* eslint-disable import/order */
import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { parse } from 'csv-parse';
import { extname } from 'path';
import { S3Service } from '../../infra/s3/S3.Service';
import { Nullable } from '../../lib/types/Nullable';
import { DocumentRepository } from './Document.Repository';
import { DOCUMENT_UPLOADED } from './DocumentEventListener.Service';
import { CreateDocumentDto } from './dto/CreateDocumentDto';
import { GetPresignedUrlDto } from './dto/GetPresignedUrlDto';
import { SignedUrlResponseDto } from './dto/SignedUrlResponseDto';
import { CsvMessage } from './entities/CsvMessage.Type';
import { Document } from './entities/Document.Entity';
import { DocumentType } from './entities/DocumentType.Enum';

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

      if (document.documentType === DocumentType.CsvMessage) {
        this.eventEmitter.emitAsync(DOCUMENT_UPLOADED, document);
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

  async upload(file: Express.Multer.File): Promise<Document> {
    try {
      if (!file) {
        throw new BadRequestException('No file uploaded');
      }

      const ext = extname(file.originalname).toLowerCase();
      if (ext !== '.csv') {
        throw new BadRequestException('Only CSV files are allowed');
      }

      await this.s3Service.uploadToS3(
        process.env.S3_BUCKET_NAME ?? '',
        file.originalname,
        file.buffer,
      );

      return this.create({ fileName: file.originalname });
    } catch (err) {
      throw new BadRequestException(err.message || 'Failed to upload CSV');
    }
  }

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

  async validateCsv(bucket: string, key: string): Promise<CsvMessage[]> {
    const chatbotMessages: CsvMessage[] = [];
    const readableStream = await this.s3Service.getCsvStream(bucket, key);

    if (!readableStream) {
      throw new Error(`Error reading CSV stream.`);
    }

    const parser = readableStream.pipe(
      parse({
        columns: true,
        skip_empty_lines: true,
        trim: true,
      }),
    );

    parser.on('headers', (parsedHeaders) => {
      if (!this.validateHeaders(parsedHeaders)) {
        throw new Error('Invalid headers');
      }
    });

    for await (const record of parser) {
      if (!record.sender_username || !record.message || !record.channel) {
        break;
      }
      if (!Object.values(MessageChannel).includes(record['channel'])) {
        break;
      }

      const chatbotMessage: CsvMessage = {
        senderUserName: record.sender_username,
        receiverUserName: record.receiver_username,
        message: record.message,
        channel: record.channel,
      };
      chatbotMessages.push(chatbotMessage);
    }
    return chatbotMessages;
  }

  validateHeaders(parsedHeaders: string[]): boolean {
    const requiredHeaders = ['sender_username', 'receiver_username', 'message', 'channel'];
    return requiredHeaders.every((header) => parsedHeaders.includes(header));
  }
}
