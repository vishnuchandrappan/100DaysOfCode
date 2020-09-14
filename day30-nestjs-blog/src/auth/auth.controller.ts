import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAllowed } from './models/user-allowed.model';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { JwtResponse } from './interfaces/jwt.interface';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) { }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(
    @Body() loginCredentialsDto: LoginCredentialsDto,
  ): Promise<JwtResponse> {
    return this.authService.login(loginCredentialsDto);
  }

  @Post('/register')
  @UsePipes(ValidationPipe)
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserAllowed> {
    return this.authService.register(createUserDto);
  }

}
