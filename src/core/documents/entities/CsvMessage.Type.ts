import { MessageChannel } from '../../intents/entities/MessageChannel.Type';

export type CsvMessage = {
  senderUserName: string;
  receiverUserName: string;
  message: string;
  channel: MessageChannel;
};
