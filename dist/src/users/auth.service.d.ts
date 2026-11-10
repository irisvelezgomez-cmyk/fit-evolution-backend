import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    register(registerDto: any): Promise<{
        message: string;
        userId: any;
        email: any;
    }>;
    login(loginDto: any): Promise<{
        message: string;
        accessToken: string;
        userId: any;
        role: any;
    }>;
}
