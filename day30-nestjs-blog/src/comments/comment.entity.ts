import { User } from '../auth/user.entity';
import { BlogPost } from '../blog-post/blog-post.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;


  @ManyToOne(
    type => User,
    user => user.comments,
    { eager: false }
  )
  user: User;

  @Column()
  userId: number;

  @ManyToOne(
    type => BlogPost,
    blogPost => blogPost.comments,
    { eager: false }
  )
  blogPost: BlogPost

  @Column()
  blogPostId: number

}