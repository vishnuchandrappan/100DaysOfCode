import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Follow extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  followedId: number;

  @Column()
  followerId: number

  @ManyToOne(
    type => User,
    user => user.followers
  )
  public follower: User;

  @ManyToOne(
    type => User,
    user => user.followed
  )
  public followed: User;

}