import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { JwtResponse } from './jwt-payload.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<User>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<JwtResponse>;
    test(user: any): string;
}
