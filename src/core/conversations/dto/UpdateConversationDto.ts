import { PartialType } from '@nestjs/swagger';
import { CreateConversationDto } from './CreateConversationDto';

export class UpdateConversationDto extends PartialType(CreateConversationDto) {}
