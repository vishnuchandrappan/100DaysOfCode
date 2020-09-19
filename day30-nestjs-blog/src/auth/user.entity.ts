import { BlogPost } from '../blog-post/blog-post.entity';
import {
  BaseEntity,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationCount,
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

  @ManyToMany(
    type => User,
    user => user.following
  )
  @JoinTable()
  followers: User[];

  @ManyToMany(
    type => User,
    user => user.followers
  )
  following: User[];

  @RelationCount((user: User) => user.followers)
  followersCount: number;

  @RelationCount((user: User) => user.following)
  followingCount: number;

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
      gravatarData,
      followingCount: this.followingCount,
      followersCount: this.followersCount
    };
  };
}
