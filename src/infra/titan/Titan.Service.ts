import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { Injectable } from '@nestjs/common';

const BedrockRunTime = new BedrockRuntimeClient({
  region: 'us-east-1',
});
@Injectable()
export class TitanService {
  constructor() {}

  async getIntentFromQuery(
    systemInstruction: string,
    conversationHistory: string,
    query: string,
  ): Promise<any> {
    const textGenerationConfig = {
      maxTokenCount: 4096,
      stopSequences: [],
      temperature: 0,
      topP: 1,
    };
    let prompt = ``;
    if (conversationHistory) {
      prompt = `${systemInstruction}\n\n${conversationHistory}\n\nUser: ${query}\n\nBot:`;
    } else {
      prompt = `${systemInstruction}\n\nUser: ${query}\n\nBot:`;
    }
    const payload = {
      inputText: prompt,
      textGenerationConfig,
    };

    const command = new InvokeModelCommand({
      body: JSON.stringify(payload),
      contentType: 'application/json',
      accept: 'application/json',
      modelId: 'amazon.titan-text-express-v1',
    });
    try {
      const response = await BedrockRunTime.send(command);
      const decodedResponseBody = new TextDecoder().decode(response.body);

      const responseBody = JSON.parse(decodedResponseBody);
      console.log(responseBody.results);
      return responseBody.results;
    } catch (err) {
      if (err) {
        console.error(`Access denied. Ensure you have the correct permissions to invoke.`);
      } else {
        throw err;
      }
    }
  }
}
