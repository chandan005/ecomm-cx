import { Module } from '@nestjs/common';
import { ConversationController } from './Conversation.Controller';
import { ConversationRepository } from './Conversation.Repository';
import { ConversationService } from './Conversation.Service';
import { ConversationDIToken } from './ConverstionDIToken';

@Module({
  imports: [ConversationDIToken.ConversationEntity, ConversationDIToken.MessageEntity],
  controllers: [ConversationController],
  providers: [ConversationService, ConversationRepository],
  exports: [ConversationService],
})
export class ConversationModule {}
