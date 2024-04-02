import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConversationService } from './Conversation.Service';
import { FindConversationQueryDto } from './dto/FindConversationQueryDto';
import { FindMessageQueryDto } from './dto/FindMessageQueryDto';
import { Conversation } from './entities/Conversation.Entity';
import { Message } from './entities/Message.Entity';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('conversations')
@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @ApiResponse({ type: Conversation, isArray: true })
  @Get('')
  findConversations(@Query() findConversationQueryDto: FindConversationQueryDto) {
    return this.conversationService.findConversations(findConversationQueryDto);
  }

  @ApiResponse({ type: Message, isArray: true })
  @Get(':id/messages')
  findConversationMessages(
    @Param('id', ParseIntPipe) id: number,
    @Query() findMessageQueryDto: FindMessageQueryDto,
  ) {
    return this.conversationService.findConversationMessages(id, findMessageQueryDto);
  }
}
