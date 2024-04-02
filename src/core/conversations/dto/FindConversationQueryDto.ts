import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class FindConversationQueryDto {
  @ApiProperty({ required: false, minimum: 1, default: 1 })
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  page: number;

  @ApiProperty({ required: false, minimum: 1, maximum: 50, default: 10 })
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  pageSize: number;
}
