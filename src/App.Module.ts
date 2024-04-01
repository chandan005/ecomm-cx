import { Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MulterModule } from '@nestjs/platform-express';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './App.Controller';
import { AppConfigModule } from './config/AppConfig.Module';
import { CoreModule } from './core/.Core.Module';
import { InfraModule } from './infra/.Infra.Module';

@Module({
  imports: [
    AppConfigModule,
    ThrottlerModule.forRoot(),
    EventEmitterModule.forRoot(),
    MulterModule.register(),
    CoreModule,
    InfraModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule implements NestModule {
  configure() {}
}
