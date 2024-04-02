import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nullable } from '../../lib/types/Nullable';
import { Conversation } from './entities/Conversation.Entity';
import { Message } from './entities/Message.Entity';

@Injectable()
export class ConversationRepository {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async createConversation(conversation: Partial<Conversation>): Promise<Nullable<Conversation>> {
    const createdConversation = await this.conversationRepository.save(
      this.conversationRepository.create(conversation),
    );

    return this.findConversation(createdConversation?.id);
  }

  async findConversation(id: number): Promise<Nullable<Conversation>> {
    return this.conversationRepository.createQueryBuilder('c').where('c.id = :id', { id }).getOne();
  }

  async findConversations(options: {
    page: number;
    pageSize: number;
  }): Promise<Nullable<Conversation[]>> {
    return this.conversationRepository
      .createQueryBuilder('c')
      .skip(options.page)
      .take(options.pageSize)
      .getMany();
  }

  async createMessage(message: Partial<Message>): Promise<Nullable<Message>> {
    const createdMessage = await this.messageRepository.save(
      this.messageRepository.create(message),
    );

    return this.findMessage(createdMessage?.id);
  }

  async findMessage(id: number): Promise<Nullable<Message>> {
    return this.messageRepository.createQueryBuilder('m').where('m.id = :id', { id }).getOne();
  }

  async findMessagesByConversation(
    conversationId: number,
    options: { page: number; pageSize: number },
  ): Promise<Nullable<Message[]>> {
    return this.messageRepository
      .createQueryBuilder('m')
      .where('m.conversationId = :conversationId', { conversationId })
      .skip(options.page)
      .take(options.pageSize)
      .getMany();
  }
}
