import { Module } from '@nestjs/common';
import { S3Module } from '../../infra/s3/S3.Module';
import { DocumentController } from './Document.Controller';
import { DocumentRepository } from './Document.Repository';
import { DocumentService } from './Document.Service';
import { DocumentDIToken } from './DocumentDIToken';

@Module({
  imports: [DocumentDIToken.DocumentEntity, S3Module],
  controllers: [DocumentController],
  providers: [DocumentRepository, DocumentService],
  exports: [DocumentService],
})
export class DocumentModule {}
