import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConversationDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  senderUserName: string;
}
