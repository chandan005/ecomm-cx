import { MessageChannel } from '../../intents/entities/MessageChannel.Type';

export type QueryAndResponse = {
  query: string;
  systemResponse: {
    channel: MessageChannel;
    response: string;
  };
};
