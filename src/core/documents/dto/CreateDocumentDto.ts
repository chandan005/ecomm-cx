import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  fileName: string;
}
