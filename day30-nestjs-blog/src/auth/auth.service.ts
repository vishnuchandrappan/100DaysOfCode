import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserAllowed } from './models/user-allowed.model';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { JwtPayload, JwtResponse } from './interfaces/jwt.interface';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  login = async (
    loginCredentialsDto: LoginCredentialsDto,
  ): Promise<JwtResponse> => {
    const { email, password } = loginCredentialsDto;
    const user = await this.userRepository.findOne({ email });

    if (!(user && (await user.validatePassword(password)))) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { email };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  };

  register = async (createUserDto: CreateUserDto): Promise<UserAllowed> => {
    return this.userRepository.createUser(createUserDto);
  };
}
