import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DocumentService } from './Document.Service';
import { GetPresignedUrlDto } from './dto/GetPresignedUrlDto';
import { SignedUrlResponseDto } from './dto/SignedUrlResponseDto';
import { Document } from './entities/Document.Entity';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('documents')
@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @ApiResponse({ type: Document })
  @UseInterceptors(FileInterceptor('csv'))
  @Post('upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.documentService.upload(file);
  }

  @ApiResponse({ type: SignedUrlResponseDto })
  @Post('generate-presigned-url')
  generatePresignedUrl(@Body() getPresignedUrlDto: GetPresignedUrlDto) {
    return this.documentService.generatePresignedUrl(getPresignedUrlDto);
  }
}
