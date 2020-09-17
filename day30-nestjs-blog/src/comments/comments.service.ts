import { Injectable } from '@nestjs/common';
import { BlogPostService } from '../blog-post/blog-post.service';
import { Comment } from './comment.entity';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { User } from 'src/auth/user.entity';
import { SuccessResponse } from '../shared/interfaces/SuccessMessage.interface';

@Injectable()
export class CommentsService {

  constructor(
    private blogPostService: BlogPostService,
    private commentRepository: CommentsRepository
  ) { }

  getComments = async (postId: number): Promise<Comment[]> => {
    const post = await this.blogPostService.getPostById(postId);
    return post.comments;
  }

  createComment = async (
    postId: number,
    user: User,
    createCommentDto: CreateCommentDto
  ): Promise<Comment> => {
    const post = await this.blogPostService.getPostById(postId);
    return this.commentRepository.createComment(
      post,
      user,
      createCommentDto
    );
  }

  deleteComment = async (
    postId: number,
    commentId: number,
    user: User
  ): Promise<SuccessResponse> => {
    return this.commentRepository.deleteComment(
      commentId,
      postId,
      user.id
    );
  }

  updateComment = async (
    postId: number,
    commentId: number,
    user: User,
    editCommentDto: CreateCommentDto
  ): Promise<SuccessResponse> => {
    return this.commentRepository.updateComment(
      commentId,
      user.id,
      postId,
      editCommentDto
    );
  }

}
