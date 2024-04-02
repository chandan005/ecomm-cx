import { Module } from '@nestjs/common';
import { S3Module } from './s3/S3.Module';
import { TitanModule } from './titan/Titan.Module';

@Module({
  imports: [S3Module, TitanModule],
})
export class InfraModule {}
