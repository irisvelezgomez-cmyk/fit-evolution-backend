import { Repository } from 'typeorm';
import { Plan, PlanType } from './plan.entity';
export declare class PlanService {
    private plansRepository;
    constructor(plansRepository: Repository<Plan>);
    assignPlan(planData: {
        planType: PlanType;
        metadata: object;
        description: string;
    }, coachId: string, userId: string): Promise<Plan>;
    getActivePlans(userId: string): Promise<Plan[]>;
}
