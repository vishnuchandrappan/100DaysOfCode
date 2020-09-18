import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {

  constructor(
    private userRepository: UserRepository
  ) { }

  followUser = async (
    followedId: number,
    follower: User
  ): Promise<User> => {
    if (followedId === follower.id) {
      throw new BadRequestException();
    }

    const followed = await this.getUserById(followedId);
    followed.followers = [follower];

    await followed.save();

    // return this.userRepository.followUser(followed, follower);
    return followed.getData();
  }

  getFollowers = async (userId: number) => {
    const followers = await this.userRepository.createQueryBuilder("user")
      .where('user.id = :userId', { userId })
      .leftJoinAndSelect("user.followers", "follower")
      .getMany();

    return followers;
  }

  getFollowing = async (userId: number) => {
    const following = await this.userRepository.createQueryBuilder("user")
      .where('user.id = :userId', { userId })
      .leftJoinAndSelect("user.following", "followed")
      .getMany();

    return following;
  }

  private getUserById = async (id: number): Promise<User> => {
    const user = await this.userRepository.findOne(id)

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

}