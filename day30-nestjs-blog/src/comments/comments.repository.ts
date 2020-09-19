
import { EntityRepository, Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { BlogPost } from '../blog-post/blog-post.entity';
import { User } from 'src/auth/user.entity';
import { NotFoundException } from '@nestjs/common';
import { SuccessResponse } from 'src/shared/interfaces/SuccessMessage.interface';

@EntityRepository(Comment)
export class CommentsRepository extends Repository<Comment> {

  // getComments = async (postId: number): Promise<Comment[]> => {
  //   const query = this.createQueryBuilder('comment');
  //   query.where(
  //     'comment.blogPostId = :postId',
  //     { postId: postId }
  //   )
  //   const comments = await query.getMany();
  //   return comments;
  // }

  createComment = async (
    post: BlogPost,
    user: User,
    createCommentDto: CreateCommentDto
  ): Promise<Comment> => {
    const { body } = createCommentDto;
    const comment = new Comment();
    comment.body = body;
    comment.user = user;
    comment.commentable_id = post.id;
    comment.commentable_type = 'blogPost';
    await comment.save();

    delete comment.user;
    delete comment.commentable_id;
    delete comment.commentable_type;

    return comment;
  }

  createReply = async (
    comment: Comment,
    user: User,
    createCommentDto: CreateCommentDto
  ): Promise<Comment> => {
    const { body } = createCommentDto;
    const reply = new Comment();
    reply.body = body;
    reply.user = user;
    reply.commentable_id = comment.id;
    reply.commentable_type = 'comment';
    await reply.save();

    delete reply.user;
    delete reply.commentable_id;
    delete reply.commentable_type;

    return reply;
  }

  // deleteComment = async (
  //   id: number,
  //   blogPostId: number,
  //   userId: number
  // ): Promise<SuccessResponse> => {
  //   const { affected } = await Comment.delete({
  //     id,
  //     userId,
  //     blogPostId
  //   });

  //   if (affected === 0) {
  //     throw new NotFoundException();
  //   }

  //   return {
  //     status: 'OK',
  //     message: 'Comment Deleted Successfully'
  //   }
  // }

  // updateComment = async (
  //   id: number,
  //   userId: number,
  //   blogPostId: number,
  //   editCommentDto: CreateCommentDto
  // ): Promise<SuccessResponse> => {
  //   const { affected } = await Comment.update(
  //     {
  //       id,
  //       userId,
  //       blogPostId,
  //     },
  //     editCommentDto
  //   )

  //   if (affected === 0) {
  //     throw new NotFoundException();
  //   }

  //   return {
  //     status: 'OK',
  //     message: 'Comment updated successfully'
  //   };

  // }

}