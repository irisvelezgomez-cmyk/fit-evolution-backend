// src/plans/dto/assign-plan.dto.ts
// src/plans/dto/assign-plan.dto.ts
export class AssignPlanDto {
    targetUserId: string;
    type: string;
    planData?: any;
    name?: string;
    description?: string;
    durationWeeks?: number;
}