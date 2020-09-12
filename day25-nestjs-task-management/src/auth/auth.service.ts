import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { JwtResponse } from './jwt-payload.interface';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) { }


  signUp = async (authCredentialsDto: AuthCredentialsDto): Promise<User> => {
    return this.userRepository.signUp(authCredentialsDto);
  }

  signIn = async (authCredentialsDto: AuthCredentialsDto): Promise<JwtResponse> => {
    const { username, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({ username });

    if (!(user && await user.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }

}
