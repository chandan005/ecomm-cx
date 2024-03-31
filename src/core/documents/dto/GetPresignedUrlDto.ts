import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PresignedUrlType } from '../../../infra/s3/entities/PresignedUrlType';

export class GetPresignedUrlDto {
  @ApiProperty({ enum: PresignedUrlType, required: true })
  @IsEnum(PresignedUrlType)
  @IsNotEmpty()
  operationType: PresignedUrlType;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  contentType: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  expirationTimeInSeconds?: number;
}
