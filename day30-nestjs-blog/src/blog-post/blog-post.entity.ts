import { User } from '../auth/user.entity';
import { Comment } from '../comments/comment.entity';
import {
  BaseEntity,
  BeforeUpdate,
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
    user => user.blogPosts,
    { eager: false },
  )
  user: User;

  // @OneToMany(
  //   type => Comment,
  //   comment => comment.blogPost,
  //   { eager: true }
  // )
  // comments: Comment[];

  @Column()
  userId: number;
}
