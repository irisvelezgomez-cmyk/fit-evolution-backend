// src/logs/log.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { LogEntry } from './log-entry.entity';
import { UserModule } from '../users/user.module'; // To access User entity for relationships

@Module({
    imports: [
        TypeOrmModule.forFeature([LogEntry]),
        UserModule
    ],
    controllers: [LogController],
    providers: [LogService],
    exports: [LogService],
})
export class LogModule {}