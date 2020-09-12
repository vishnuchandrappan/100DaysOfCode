import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { JwtResponse } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp: (authCredentialsDto: AuthCredentialsDto) => Promise<User>;
    signIn: (authCredentialsDto: AuthCredentialsDto) => Promise<JwtResponse>;
}
