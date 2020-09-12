import { Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserRepository extends Repository<User> {
    private jwtService;
    constructor(jwtService: JwtService);
    signUp: (authCredentialsDto: AuthCredentialsDto) => Promise<User>;
    private hashPassword;
}
