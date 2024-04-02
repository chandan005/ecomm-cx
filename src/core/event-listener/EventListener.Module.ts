import { Module } from '@nestjs/common';
import { ConversationModule } from '../conversations/Conversation.Module';
import { DocumentModule } from '../documents/Document.Module';
import { IntentModule } from '../intents/Intent.Module';
import { EventListenerService } from './EventListener.Service';

@Module({
  imports: [DocumentModule, ConversationModule, IntentModule],
  exports: [EventListenerService],
  providers: [EventListenerService],
})
export class EventListenerModule {}
