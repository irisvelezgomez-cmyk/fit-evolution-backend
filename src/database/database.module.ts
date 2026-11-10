import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from '../config/database.config';
import { UserModule } from '../users/user.module';
