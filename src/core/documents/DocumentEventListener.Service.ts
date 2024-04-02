// import { Injectable } from '@nestjs/common';
// import { OnEvent } from '@nestjs/event-emitter';
// import { ConversationService } from '../conversations/Conversation.Service';
// import { QueryAndResponse } from '../conversations/entities/QueryAndResponse';
// import { IntentService } from '../intents/Intent.Service';
// import { DocumentService } from './Document.Service';
// import { CsvMessage } from './entities/CsvMessage.Type';
// import { Document } from './entities/Document.Entity';

// export const DOCUMENT_UPLOADED = 'document.uploaded';

// @Injectable()
// export class DocumentEventListenerService {
//   constructor(
//     private readonly documentService: DocumentService,
//     private readonly intentService: IntentService,
//     private readonly conversationService: ConversationService,
//   ) {}

//   @OnEvent(DOCUMENT_UPLOADED, { async: true })
//   async onDocumentUploaded(document: Document) {
//     const messages: CsvMessage[] = await this.documentService.validateCsv(
//       process.env.S3_BUCKET_NAME ?? '',
//       document.fileName,
//     );

//     if (!messages) return;

//     for (const message of messages) {
//       const intentsIdentified = await this.intentService.classifyQueryToIntent(message.message);

//       const conversation = await this.conversationService.createConversation({
//         senderUserName: message.senderUserName,
//         receiverUserName: message.receiverUserName,
//       });

//       const queryAndResponses: QueryAndResponse[] = [];
//       for (const intent of intentsIdentified) {
//         const systemIntent = await this.intentService.findByIntent(intent);

//         const systemIntentResponses = systemIntent.responses.filter(
//           (si) => si.channel === message.channel,
//         );
//         if (systemIntentResponses?.length > 0) {
//           queryAndResponses.push({
//             query: message.message,
//             systemResponse: {
//               channel: message.channel,
//               response: systemIntentResponses[0].response,
//             },
//           });
//         }

//         await this.conversationService.createMessage(conversation.id, {
//           intentsIdentified,
//           queryAndResponses,
//         });
//       }
//     }
//   }
// }
