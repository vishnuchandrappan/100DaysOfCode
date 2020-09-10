import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User>{
  signUp = async (authCredentialsDto: AuthCredentialsDto): Promise<User> => {
    const { username, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();

    const user = new User();
    user.username = username;
    user.salt = salt;
    user.password = await this.hashPassword(password, salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException("Username already exists");
      }
      throw new InternalServerErrorException();
    }

    return user;

  }

  signIn = async (authCredentialsDto: AuthCredentialsDto): Promise<string> => {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ username });

    if(!(user && await user.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    return user.username;
  }

  private hashPassword = async (password: string, salt: string): Promise<string> => {
    return bcrypt.hash(password, salt);
  }
}