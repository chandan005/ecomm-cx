import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Nullable } from '../../lib/types/Nullable';
import { IntentRepository } from './Intent.Repository';
import { CreateSystemIntentDto } from './dto/CreateSystemIntentDto';
import { SystemIntent } from './entities/SystemIntent.Entity';
import { seedSystemIntents } from './entities/SystemIntentSeed';

@Injectable()
export class IntentService {
  constructor(private readonly intentRepository: IntentRepository) {}

  async onModuleInit() {
    const existingIntents = await this.intentRepository.findSeededSystemIntentsCount();
    if (existingIntents === 0) {
      await this.createMany(seedSystemIntents);
    }
  }

  async create(createSystemIntentDto: CreateSystemIntentDto): Promise<SystemIntent> {
    try {
      const systemIntent: Nullable<SystemIntent> = await this.intentRepository.createSystemIntent({
        ...createSystemIntentDto,
      });

      if (!systemIntent) {
        throw new BadRequestException(`Exception creating SystemIntent.`);
      }
      return systemIntent;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(`Error creating SystemIntent.`);
    }
  }

  async createMany(systemIntents: Partial<SystemIntent>[]): Promise<void> {
    try {
      await this.intentRepository.createSystemIntents(systemIntents);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(`Error seeding SystemIntents.`);
    }
  }

  async findOne(id: number): Promise<SystemIntent> {
    try {
      const systemIntent = await this.intentRepository.findSystemIntent(id);

      if (!systemIntent) {
        throw new NotFoundException(`SystemIntent with id ${id} not found.`);
      }
      return systemIntent;
    } catch (err) {
      throw new BadGatewayException(`SystemIntent with id ${id} not found.`);
    }
  }
}
