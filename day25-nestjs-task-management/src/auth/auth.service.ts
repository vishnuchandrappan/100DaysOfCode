import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) { }


  signUp = async (authCredentialsDto: AuthCredentialsDto): Promise<User> => {
    return this.userRepository.signUp(authCredentialsDto);
  }
  
  signIn = async (authCredentialsDto: AuthCredentialsDto): Promise<string> => {
    return this.userRepository.signIn(authCredentialsDto);
  }

}
