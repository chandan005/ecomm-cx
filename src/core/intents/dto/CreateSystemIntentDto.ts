import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { SystemIntentResponse } from '../entities/SystemIntentResponse.Type';

export class CreateSystemIntentDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  intent: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  intentDescription: string;

  @ApiProperty({ required: false })
  @IsObject()
  @IsOptional()
  responses: SystemIntentResponse[];
}
