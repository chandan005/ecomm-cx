import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { PresignedUrlType } from '../../../infra/s3/entities/PresignedUrlType';

export class SignedUrlResponseDto {
  @ApiProperty({ required: true })
  @IsString()
  signedUrl: string;

  @ApiProperty({ enum: PresignedUrlType, required: true })
  @IsEnum(PresignedUrlType)
  operationType: PresignedUrlType;

  @ApiProperty({ required: true })
  @IsNumber()
  expirationTimeInSeconds?: number;
}
