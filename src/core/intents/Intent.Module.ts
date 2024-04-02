import { Module } from '@nestjs/common';
import { IntentRepository } from './Intent.Repository';
import { IntentService } from './Intent.Service';
import { IntentDIToken } from './IntentDIToken';

@Module({
  imports: [IntentDIToken.IntentEntity],
  controllers: [],
  providers: [IntentRepository, IntentService],
  exports: [IntentService],
})
export class IntentModule {}
