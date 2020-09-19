import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorators/get-user.decorator';
import { User } from '../auth/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('blog-posts/:entityId/comments')
@UseGuards(AuthGuard())
export class CommentsController {

  constructor(
    private commentsService: CommentsService
  ) { }

  // @Get()
  // index(
  //   @Param('entityId', ParseIntPipe) postId: number,
  // ) {
  //   return this.commentsService.getComments(postId);
  // }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Param('entityId', ParseIntPipe) postId: number,
    @GetUser() user: User,
    @Body() createCommentDto: CreateCommentDto
  ) {
    return this.commentsService.createComment(
      postId,
      user,
      createCommentDto
    );
  }

  @Post()
  @UsePipes(ValidationPipe)
  createReply(
    @Param('entityId', ParseIntPipe) commentId: number,
    @GetUser() user: User,
    @Body() createCommentDto: CreateCommentDto
  ) {
    return this.commentsService.createReply(
      commentId,
      user,
      createCommentDto
    );
  }

  // @Delete(':commentId')
  // @UsePipes(ValidationPipe)
  // destroy(
  //   @Param('entityId', ParseIntPipe) entityId: number,
  //   @Param('commentId', ParseIntPipe) commentId: number,
  //   @GetUser() user: User,
  // ) {
  //   return this.commentsService.deleteComment(entityId, commentId, user);
  // }

  // @Put('/:commentId')
  // @UsePipes(ValidationPipe)
  // update(
  //   @Param('entityId', ParseIntPipe) entityId: number,
  //   @Param('commentId', ParseIntPipe) commentId: number,
  //   @GetUser() user: User,
  //   @Body() editCommentDto: CreateCommentDto,
  // ) {
  //   return this.commentsService.updateComment(entityId, commentId, user, editCommentDto)
  // }


}
