import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DocumentService } from './Document.Service';
import { CreateDocumentDto } from './dto/CreateDocumentDto';
import { GetPresignedUrlDto } from './dto/GetPresignedUrlDto';
import { SignedUrlResponseDto } from './dto/SignedUrlResponseDto';
import { Document } from './entities/Document.Entity';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('documents')
@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @ApiBearerAuth()
  @ApiResponse({ type: Document })
  @Post('')
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentService.create(createDocumentDto);
  }

  @ApiBearerAuth()
  @ApiResponse({ type: SignedUrlResponseDto })
  @Post('generate-presigned-url')
  generatePresignedUrl(@Body() getPresignedUrlDto: GetPresignedUrlDto) {
    return this.documentService.generatePresignedUrl(getPresignedUrlDto);
  }
}
