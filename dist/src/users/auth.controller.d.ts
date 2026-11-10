import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        message: string;
        accessToken: string;
        userId: any;
        role: any;
    }>;
    register(registerDto: RegisterDto): Promise<{
        message: string;
        userId: any;
        email: any;
    }>;
}
