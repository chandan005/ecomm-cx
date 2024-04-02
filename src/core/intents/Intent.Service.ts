import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Nullable } from '../../lib/types/Nullable';
import { SystemIntent } from './entities/SystemIntent.Entity';
import { IntentRepository } from './Intent.Repository';
import { CreateSystemIntentDto } from './dto/CreateSystemIntentDto';

@Injectable()
export class IntentService {
  constructor(private readonly intentRepository: IntentRepository) {}

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
