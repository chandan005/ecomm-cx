import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { QueryAndResponse } from '../entities/QueryAndResponse';

export class CreateMessageDto {
  @ApiProperty({ required: true, type: String, isArray: true })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  intentsIdentifier: string[];

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsObject()
  queryAndResponse: QueryAndResponse;
}
