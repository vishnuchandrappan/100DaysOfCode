import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: UserRepository);
    signUp: (authCredentialsDto: AuthCredentialsDto) => Promise<User>;
    signIn: (authCredentialsDto: AuthCredentialsDto) => Promise<string>;
}
