import { BlogPost } from '../blog-post/blog-post.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as gravatar from 'gravatar';
import { Comment } from '../comments/comment.entity';

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
