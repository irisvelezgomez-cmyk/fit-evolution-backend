// src/plans/plan.controller.ts
import { Controller, Post, Body, Param, Get, UseGuards } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanType } from './plan.entity';
import { RolesGuard } from '../users/guards/roles.guard';
import { Roles } from '../users/decorators/roles.decorator';
import { UserRole } from '../users/user.entity';
import { AssignPlanDto } from './dto/assign-plan.dto';

@Controller('plans')
export class PlanController {
    constructor(private readonly planService: PlanService) {}

    /**
     * Coach endpoint: Assigns a plan to a client.
     * Restricted to Coach, Admin, or Client roles for testing purposes.
     */
    @Post('assign')
    @UseGuards(RolesGuard)
    @Roles(UserRole.COACH, UserRole.ADMIN, UserRole.CLIENT)
    async assignPlan(@Body() assignPlanDto: AssignPlanDto) {
        const coachId = 'MOCKED_COACH_ID';
        const userId = assignPlanDto.targetUserId;

        // Mapeamos los campos al formato exacto que espera el servicio
        const planPayload = {
            planType: (assignPlanDto.type as PlanType) || PlanType.WORKOUT,
            description: assignPlanDto.description || assignPlanDto.planData?.description || 'Sin descripción',
            metadata: {
                name: assignPlanDto.name || assignPlanDto.planData?.name || 'Plan de Entrenamiento',
                durationWeeks: assignPlanDto.durationWeeks || assignPlanDto.planData?.durationWeeks || 4,
            },
        };

        return this.planService.assignPlan(planPayload, coachId, userId);
    }

    /**
     * Client endpoint: Retrieves the active plans for the user.
     * Restricted to Client or Coach roles.
     */
    @Get('my-plans')
    @UseGuards(RolesGuard)
    @Roles(UserRole.CLIENT, UserRole.COACH)
    async getMyPlans() {
        // In a real scenario, the JWT payload would provide the userId.
        const userId = 'MOCKED_CLIENT_ID';
        return this.planService.getActivePlans(userId);
    }
}