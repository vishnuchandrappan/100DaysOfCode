import { User } from '../auth/user.entity';
import { Comment } from '../comments/comment.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BlogPost extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  image: string;

  @ManyToOne(
    type => User,
    user => user.blogPosts,
    { eager: false },
  )
  user: User;

  @OneToMany(
    type => Comment,
    comment => comment.blogPost,
    { eager: true }
  )
  comments: Comment[];

  @Column()
  userId: number;
}
