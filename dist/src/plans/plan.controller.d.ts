import { PlanService } from './plan.service';
import { AssignPlanDto } from './dto/assign-plan.dto';
export declare class PlanController {
    private readonly planService;
    constructor(planService: PlanService);
    assignPlan(assignPlanDto: AssignPlanDto): Promise<import("./plan.entity").Plan>;
    getMyPlans(): Promise<import("./plan.entity").Plan[]>;
}
