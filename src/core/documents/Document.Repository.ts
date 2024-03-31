import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nullable } from '../../lib/types/Nullable';
import { Document } from './entities/Document.Entity';

@Injectable()
export class DocumentRepository {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
  ) {}

  async createDocument(document: Partial<Document>): Promise<Nullable<Document>> {
    const createdDocument = await this.documentRepository.save(
      this.documentRepository.create(document),
    );

    return this.findDocument(createdDocument?.id);
  }

  async findDocument(id: number): Promise<Nullable<Document>> {
    return this.documentRepository.createQueryBuilder('d').where('d.id = :id', { id }).getOne();
  }
}
