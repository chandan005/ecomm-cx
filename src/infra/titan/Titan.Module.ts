import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TitanService } from './Titan.Service';

@Module({
  imports: [ConfigModule],
  exports: [TitanService],
  providers: [TitanService],
})
export class TitanModule {}
