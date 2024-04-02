import { Module } from '@nestjs/common';

import { ConversationModule } from './conversations/Conversation.Module';
import { DocumentModule } from './documents/Document.Module';
import { EventListenerModule } from './event-listener/EventListener.Module';
import { IntentModule } from './intents/Intent.Module';

@Module({
  imports: [DocumentModule, ConversationModule, IntentModule, EventListenerModule],
})
export class CoreModule {}
