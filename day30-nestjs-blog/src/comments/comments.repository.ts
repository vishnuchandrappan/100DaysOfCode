
import { EntityRepository, Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { BlogPost } from '../blog-post/blog-post.entity';
import { User } from 'src/auth/user.entity';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SuccessResponse } from 'src/shared/interfaces/SuccessMessage.interface';
import { EditCommentDto } from './dto/edit-comment.dto';

@EntityRepository(Comment)
export class CommentsRepository extends Repository<Comment> {

  getComments = async (postId: number): Promise<Comment[]> => {
    const query = this.createQueryBuilder('comment');
    query.where(
      'comment.blogPostId = :postId',
      { postId: postId }
    )
    const comments = await query.getMany();
    return comments;
  }

  createComment = async (post: BlogPost, user: User, createCommentDto: CreateCommentDto): Promise<Comment> => {
    const { body } = createCommentDto;
    const comment = new Comment();
    comment.body = body;
    comment.user = user;
    comment.blogPost = post;
    await comment.save();

    delete comment.user;
    delete comment.blogPost;

    return comment;
  }

  deleteComment = async (
    id: number,
    blogPostId: number,
    userId: number
  ): Promise<SuccessResponse> => {
    const { affected } = await Comment.delete({
      id,
      userId,
      blogPostId
    });

    if (affected === 0) {
      throw new NotFoundException();
    }

    return {
      status: 'OK',
      message: 'Comment Deleted Successfully'
    }
  }

  updateComment = async (
    comment: Comment,
    postId : number,
    userId: number,
    editCommentDto: EditCommentDto
  ): Promise<Comment> => {
    const { body } = editCommentDto;
    if (body) {
      if (comment.blogPostId === postId && comment.userId === userId) {
        comment.body = body;
        await comment.save();
      }
      else {
        throw new UnauthorizedException();
      }
    }
    return comment;
  }

}