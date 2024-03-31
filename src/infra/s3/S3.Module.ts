import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { S3Service } from './S3.Service';

@Module({
  imports: [ConfigModule, HttpModule],
  exports: [S3Service],
  providers: [S3Service, S3],
})
export class S3Module {}
