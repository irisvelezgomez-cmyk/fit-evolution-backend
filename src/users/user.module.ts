import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController], // 👈 Deja solo AuthController por ahora
  providers: [UserService, AuthService],
  exports: [UserService],
})
export class UserModule {}