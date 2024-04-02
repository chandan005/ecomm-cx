import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BedrockRuntime } from 'aws-sdk';
import { TitanService } from './Titan.Service';

@Module({
  imports: [ConfigModule, HttpModule],
  exports: [TitanService],
  providers: [TitanService, BedrockRuntime],
})
export class TitanModule {}
