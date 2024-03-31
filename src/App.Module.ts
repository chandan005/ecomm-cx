import { Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './App.Controller';
import { AppConfigModule } from './config/AppConfig.Module';

@Module({
  imports: [AppConfigModule, ThrottlerModule.forRoot(), EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule implements NestModule {
  configure() {}
}
