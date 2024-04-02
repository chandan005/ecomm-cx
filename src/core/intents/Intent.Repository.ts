import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nullable } from '../../lib/types/Nullable';
import { SystemIntent } from './entities/SystemIntent.Entity';

@Injectable()
export class IntentRepository {
  constructor(
    @InjectRepository(SystemIntent)
    private readonly repository: Repository<SystemIntent>,
  ) {}

  async createSystemIntent(systemIntent: Partial<SystemIntent>): Promise<Nullable<SystemIntent>> {
    const createdIntent = await this.repository.save(this.repository.create(systemIntent));

    return this.findSystemIntent(createdIntent?.id);
  }

  async findSystemIntent(id: number): Promise<Nullable<SystemIntent>> {
    return this.repository.createQueryBuilder('si').where('si.id = :id', { id }).getOne();
  }

  async findSystemIntents(): Promise<Nullable<SystemIntent[]>> {
    return this.repository.createQueryBuilder('si').getMany();
  }
}
