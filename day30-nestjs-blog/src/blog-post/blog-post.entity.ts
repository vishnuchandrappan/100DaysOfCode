import { User } from '../auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";

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
    { eager: false }
  )
  user: User;

  @Column()
  userId: number;

}