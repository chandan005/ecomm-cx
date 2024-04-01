export type ChatbotMessage = {
  senderUserName: string;
  receiverUserName: string;
  message: string;
  channel: MessageChannel;
};
