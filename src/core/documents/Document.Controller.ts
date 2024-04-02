import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  upload(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'csv',
        })
        .addMaxSizeValidator({
          maxSize: 1000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    return this.documentService.upload(file);
  }

  @ApiResponse({ type: SignedUrlResponseDto })
  @Post('generate-presigned-url')
  generatePresignedUrl(@Body() getPresignedUrlDto: GetPresignedUrlDto) {
    return this.documentService.generatePresignedUrl(getPresignedUrlDto);
  }
}
