import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateConversationDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  senderUserName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  receiverUserName: string;
}
