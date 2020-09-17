import { BadRequestException, Injectable } from '@nestjs/common';
import { FollowRepository } from './follow.repository';
import { User } from '../auth/user.entity';

@Injectable()
export class FollowService {

  constructor(
    private followRepository: FollowRepository
  ) { }


  getFollowers = async (user: User): Promise<any> => {
    const followers = await user.followers;
    return followers;
  }

  followUser = async (
    followedId: number,
    follower: User
  ): Promise<any> => {
    if (followedId === follower.id) {
      throw new BadRequestException();
    }
    return this.followRepository.followUser(
      followedId,
      follower
    );
  }

}
