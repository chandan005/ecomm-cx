import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './entities/Document.Entity';

export class DocumentDIToken {
  static readonly DocumentSymbol = 'Document';
  static readonly DocumentEntity = TypeOrmModule.forFeature([Document]);
}
