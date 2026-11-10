// src/knowledge/knowledge.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KnowledgeService } from './knowledge.service';
import { KnowledgeController } from './knowledge.controller';
import { KnowledgeEntry } from './knowledge-entry.entity';
import { UserModule } from '../users/user.module'; // Dependency for roles/users

@Module({
    imports: [
        TypeOrmModule.forFeature([KnowledgeEntry]),
        UserModule // Needed for context/role checks
    ],
    controllers: [KnowledgeController],
    providers: [KnowledgeService],
    exports: [KnowledgeService], // Export service so other parts of the API can use it
})
export class KnowledgeModule {}