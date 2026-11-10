// src/users/auth.service.ts
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async register(registerDto: any) {
        const { email, password, role } = registerDto;

        const existingUser = await this.userRepository.findOne({ where: { email } as any });
        if (existingUser) {
            throw new BadRequestException('El correo electrónico ya está registrado.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            email,
            passwordHash: hashedPassword,
            role: role || 'CLIENT',
        } as any);

        await this.userRepository.save(newUser);

        return {
            message: 'Usuario registrado exitosamente',
            userId: (newUser as any).id,
            email: (newUser as any).email,
        };
    }

    async login(loginDto: any) {
        const { email, password } = loginDto;

        const user = await this.userRepository.findOne({ where: { email } as any });
        if (!user) {
            throw new UnauthorizedException('Credenciales inválidas.');
        }

        const isPasswordValid = await bcrypt.compare(password, (user as any).passwordHash || (user as any).password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas.');
        }

        return {
            message: 'Inicio de sesión exitoso',
            accessToken: `MOCKED_JWT_${(user as any).id}_${(user as any).role}`,
            userId: (user as any).id,
            role: (user as any).role,
        };
    }
}