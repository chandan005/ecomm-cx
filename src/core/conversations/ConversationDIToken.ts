import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from './entities/Conversation.Entity';
import { Message } from './entities/Message.Entity';

export class ConversationDIToken {
  static readonly ConversationSymbol = 'Conversation';
  static readonly ConversationEntity = TypeOrmModule.forFeature([Conversation]);
  static readonly MessageSymbol = 'Message';
  static readonly MessageEntity = TypeOrmModule.forFeature([Message]);
}
