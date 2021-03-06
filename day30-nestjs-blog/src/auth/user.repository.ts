import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserAllowed } from './models/user-allowed.model';
import { CreateUserDto } from './dto/create-user-dto';
import {
  ConflictException,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SuccessResponse } from 'src/shared/interfaces/SuccessMessage.interface';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (createUserDto: CreateUserDto): Promise<UserAllowed> => {
    const { name, password, email, password_confirmation } = createUserDto;

    if (password !== password_confirmation) {
      throw new HttpException('Password confirmation does not match', 422);
    }

    const salt = await bcrypt.genSalt();

    const user = new User();
    user.name = name;
    user.email = email;
    user.salt = salt;
    user.password = await this.hashPassword(password, salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email ID already exists');
      }
      throw new InternalServerErrorException();
    }

    return user.getData();
  };

  followUser = async (
    followed: User,
    follower: User
  ): Promise<SuccessResponse> => {
    followed.followers = [follower];
    await followed.save();
    return {
      status: "OK",
      message: "successful following user"
    };
  }

  private hashPassword = async (
    password: string,
    salt: string,
  ): Promise<string> => {
    return bcrypt.hash(password, salt);
  };
}
