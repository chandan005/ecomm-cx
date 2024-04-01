import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  fileName: string;
}
