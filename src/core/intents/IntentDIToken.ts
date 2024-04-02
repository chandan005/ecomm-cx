import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemIntent } from './entities/SystemIntent.Entity';

export class IntentDIToken {
  static readonly IntentSymbol = 'SystemIntent';
  static readonly IntentEntity = TypeOrmModule.forFeature([SystemIntent]);
}
