import { User } from '../auth/user.entity';
import { BlogPost } from '../blog-post/blog-post.entity';
import {
  BaseEntity,
  BeforeUpdate,
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

  @Column()
  commentable_id: number;

  @Column()
  commentable_type: 'comment' | 'blogPost';

  @Column({
    type: 'timestamp',
    default: () => "CURRENT_TIMESTAMP"
  })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => "CURRENT_TIMESTAMP"
  })
  updated_at: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated_at = new Date;
  }

  @ManyToOne(
    type => User,
    user => user.comments,
    { eager: false }
  )
  user: User;

  @Column()
  userId: number;

}