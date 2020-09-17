import { BlogPost } from '../blog-post/blog-post.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as gravatar from 'gravatar';
import { Comment } from '../comments/comment.entity';
import { Follow } from 'src/follow/follow.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(
    type => BlogPost,
    blogPost => blogPost.user,
    { eager: true },
  )
  blogPosts: BlogPost[];

  @OneToMany(
    type => Comment,
    comment => comment.user,
    { eager: true }
  )
  comments: Comment[]

  @OneToMany(
    type => Follow,
    follow => follow.followerId
  )
  followers: Follow[];

  @OneToMany(
    type => Follow,
    follow => follow.followedId
  )
  followed: Follow[];


  validatePassword = async (password: string): Promise<boolean> => {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  };

  getData = async (): Promise<any> => {
    const gravatarData = await gravatar.profile_url(this.email);
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      gravatarData
    };
  };
}
