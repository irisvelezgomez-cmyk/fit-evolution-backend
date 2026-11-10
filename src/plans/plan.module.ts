// src/plans/plan.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { Plan } from './plan.entity';
import { UserModule } from '../users/user.module'; // Dependency on UserModule

@Module({
    imports: [
        TypeOrmModule.forFeature([Plan]),
        UserModule // Ensure we have access to the User entity for the ManyToOne relationship
    ],
    controllers: [PlanController],
    providers: [PlanService],
    exports: [PlanService], // Export service so other modules (like the API Gateway) can use it
})
export class PlanModule {}