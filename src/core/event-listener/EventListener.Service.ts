import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import Handlebars from 'handlebars';
import { ConversationService } from '../conversations/Conversation.Service';
import { QueryAndResponse } from '../conversations/entities/QueryAndResponse';
import { DocumentService } from '../documents/Document.Service';
import { CsvMessage } from '../documents/entities/CsvMessage.Type';
import { Document } from '../documents/entities/Document.Entity';
import { IntentService } from '../intents/Intent.Service';
import { SystemIntent } from '../intents/entities/SystemIntent.Entity';

@Injectable()
export class EventListenerService {
  constructor(
    private readonly documentService: DocumentService,
    private readonly intentService: IntentService,
    private readonly conversationService: ConversationService,
  ) {}

  @OnEvent('document.uploaded', { async: true })
  async onDocumentUploaded(document: Document) {
    const messages: CsvMessage[] = await this.documentService.validateCsv(
      process.env.S3_BUCKET_NAME ?? '',
      document.fileName,
    );

    if (!messages) return;

    for (const message of messages) {
      const intentsIdentified = await this.intentService.classifyQueryToIntent(message.message);

      const conversation = await this.conversationService.createConversation({
        senderUserName: message.senderUserName,
        receiverUserName: message.receiverUserName,
      });

      const queryAndResponses: QueryAndResponse[] = [];
      console.log('Intent Identified', intentsIdentified);
      const systemIntents: SystemIntent[] =
        await this.intentService.findByIntents(intentsIdentified);
      for (const systemIntent of systemIntents) {
        const systemIntentResponses = systemIntent.responses.filter(
          (si) => si.channel === message.channel,
        );
        if (systemIntentResponses?.length > 0) {
          const compiledTemplateResponse = this.compileResponseTemplate(
            systemIntentResponses[0].response,
            { sender_username: message.senderUserName },
          );
          queryAndResponses.push({
            query: message.message,
            systemResponse: {
              channel: message.channel,
              response: compiledTemplateResponse
                ? compiledTemplateResponse
                : systemIntentResponses[0].response,
            },
          });
        }

        await this.conversationService.createMessage(conversation.id, {
          intentsIdentified,
          queryAndResponses,
        });
      }
    }
  }

  compileResponseTemplate(responseTemplate: string, payload: any): string | undefined {
    try {
      const compiledTemplate = Handlebars.compile(responseTemplate);
      const template = compiledTemplate({ ...payload });
      return template;
    } catch (err) {
      console.error(err);
    }
  }
}
