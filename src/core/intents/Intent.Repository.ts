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

  async createSystemIntents(systemIntents: Partial<SystemIntent>[]): Promise<void> {
    const createdIntents = this.repository.create(systemIntents);
    await this.repository.save(createdIntents);
  }

  async findSystemIntent(id: number): Promise<Nullable<SystemIntent>> {
    return this.repository.createQueryBuilder('si').where('si.id = :id', { id }).getOne();
  }

  async findByIntent(options: { intent?: string }): Promise<Nullable<SystemIntent>> {
    const queryBuilder = this.repository.createQueryBuilder('si');

    if (options.intent) {
      queryBuilder.andWhere('si.intent = :intent', { intent: options.intent });
    }
    return this.repository.createQueryBuilder('si').getOne();
  }

  async findSeededSystemIntentsCount(): Promise<number> {
    return this.repository.createQueryBuilder('si').getCount();
  }
}
