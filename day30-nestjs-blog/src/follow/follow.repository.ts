import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { Follow } from "./follow.entity";

@EntityRepository(Follow)
export class FollowRepository extends Repository<Follow> {

  followUser = async (
    followedId: number,
    follower: User
  ): Promise<any> => {

    const follow = new Follow();
    follow.followedId = followedId;
    follow.follower = follower;

    await follow.save();
    return follow;
  }

}