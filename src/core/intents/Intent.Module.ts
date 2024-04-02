import { Module } from '@nestjs/common';
import { IntentDIToken } from './IntentDIToken';

@Module({
  imports: [IntentDIToken.IntentEntity],
  controllers: [],
  providers: [],
  exports: [],
})
export class IntentModule {}
