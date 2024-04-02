import { Module } from '@nestjs/common';

import { ConversationModule } from './conversations/Conversation.Module';
import { DocumentModule } from './documents/Document.Module';
import { IntentModule } from './intents/Intent.Module';

@Module({
  imports: [DocumentModule, ConversationModule, IntentModule],
})
export class CoreModule {}
