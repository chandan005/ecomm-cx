import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Nullable } from '../../lib/types/Nullable';
import { ConversationRepository } from './Conversation.Repository';
import { CreateConversationDto } from './dto/CreateConversationDto';
import { CreateMessageDto } from './dto/CreateMessageDto';
import { FindConversationQueryDto } from './dto/FindConversationQueryDto';
import { FindMessageQueryDto } from './dto/FindMessageQueryDto';
import { Conversation } from './entities/Conversation.Entity';
import { Message } from './entities/Message.Entity';

@Injectable()
export class ConversationService {
  constructor(private readonly conversationRepository: ConversationRepository) {}

  async createConversation(createConversationDto: CreateConversationDto): Promise<Conversation> {
    try {
      const conversation: Nullable<Conversation> =
        await this.conversationRepository.createConversation({
          ...createConversationDto,
          messages: [],
        });

      if (!conversation) {
        throw new BadRequestException(`Exception creating conversation.`);
      }
      return conversation;
    } catch (err) {
      console.error(err);
      throw new BadRequestException(`Error creating conversation.`);
    }
  }

  async createMessage(
    conversationId: number,
    createMessageDto: CreateMessageDto,
  ): Promise<Message> {
    try {
      const message: Nullable<Message> = await this.conversationRepository.createMessage({
        conversationId: conversationId,
        ...createMessageDto,
      });

      if (!message) {
        throw new BadRequestException(
          `Exception creating message for conversationId ${conversationId}`,
        );
      }
      return message;
    } catch (err) {
      console.error(err);
      throw new BadRequestException(
        `Exception creating message for conversationId ${conversationId}`,
      );
    }
  }

  async findConversations(
    findConversationQueryDto: FindConversationQueryDto,
  ): Promise<Conversation[]> {
    try {
      const conversations = await this.conversationRepository.findConversations({
        ...findConversationQueryDto,
      });

      if (!conversations) {
        throw new NotFoundException(`Conversation  not found.`);
      }
      return conversations;
    } catch (err) {
      throw new NotFoundException(`Conversations not found.`);
    }
  }

  async findConversation(id: number): Promise<Conversation> {
    try {
      const conversation = await this.conversationRepository.findConversation(id);

      if (!conversation) {
        throw new NotFoundException(`Conversation with id ${id} not found.`);
      }
      return conversation;
    } catch (err) {
      throw new NotFoundException(`Conversation with id ${id} not found.`);
    }
  }

  async findConversationMessages(
    id: number,
    findMessageQueryDto: FindMessageQueryDto,
  ): Promise<Message[]> {
    try {
      const messages = await this.conversationRepository.findMessagesByConversation(id, {
        ...findMessageQueryDto,
      });

      if (!messages) {
        throw new NotFoundException(`Messages not found for conversation with id ${id}.`);
      }
      return messages;
    } catch (err) {
      throw new NotFoundException(`Messages not found for conversation with id ${id}.`);
    }
  }
}
