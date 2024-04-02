import { MessageChannel } from './MessageChannel.Type';

export type SystemIntentResponse = {
  channel: MessageChannel;
  response: string;
  isActive?: boolean;
};
