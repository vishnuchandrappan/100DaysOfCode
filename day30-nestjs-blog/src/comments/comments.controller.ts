import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorators/get-user.decorator';
import { User } from '../auth/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { EditCommentDto } from './dto/edit-comment.dto';

@Controller('blog-posts/:postId/comments')
@UseGuards(AuthGuard())
export class CommentsController {

  constructor(
    private commentsService: CommentsService
  ) { }

  @Get()
  index(
    @Param('postId', ParseIntPipe) postId: number,
  ) {
    return this.commentsService.getComments(postId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Param('postId', ParseIntPipe) postId: number,
    @GetUser() user: User,
    @Body() createCommentDto: CreateCommentDto
  ) {
    return this.commentsService.createComment(postId, user, createCommentDto);
  }

  @Delete(':commentId')
  @UsePipes(ValidationPipe)
  destroy(
    @Param('postId', ParseIntPipe) postId: number,
    @Param('commentId', ParseIntPipe) commentId: number,
    @GetUser() user: User,
  ) {
    return this.commentsService.deleteComment(postId, commentId, user);
  }

  @Put('/:commentId')
  @UsePipes(ValidationPipe)
  update(
    @Param('postId', ParseIntPipe) postId: number,
    @Param('commentId', ParseIntPipe) commentId: number,
    @GetUser() user: User,
    @Body() editCommentDto: EditCommentDto,
  ) {
    return this.commentsService.updateComment(postId, commentId, user, editCommentDto)
  }


}
