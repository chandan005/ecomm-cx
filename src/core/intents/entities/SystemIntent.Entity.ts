import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SystemIntentResponse } from './SystemIntentResponse.Type';

@Entity('systemIntents')
export class SystemIntent extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  intent: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: true })
  intentDescription?: string;

  @ApiProperty()
  @Column({ type: 'jsonb', default: () => "'[]'", nullable: false })
  responses: SystemIntentResponse[];

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
