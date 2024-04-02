import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Conversation } from './Conversation.Entity';
import { QueryAndResponse } from './QueryAndResponse';

@Entity('messages')
export class Message extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  conversationId: number;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages, {
    eager: false,
  })
  conversation: Conversation[];

  @ApiProperty()
  @Column({ type: 'simple-array', default: [] })
  intentsIdentified: string[];

  @ApiProperty()
  @Column({ type: 'jsonb', default: () => "'[]'", nullable: false })
  queryAndResponses: QueryAndResponse[];

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date;
}
