// src/plans/plan.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan, PlanType } from './plan.entity';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private plansRepository: Repository<Plan>,
  ) {}

  async assignPlan(planData: { planType: PlanType; metadata: object; description: string }, coachId: string, userId: string): Promise<Plan> {
    const newPlan = this.plansRepository.create({
      type: planData.planType,
      planData: planData.metadata,
    });
    return this.plansRepository.save(newPlan);
  }

  async getActivePlans(userId: string): Promise<Plan[]> {
    return this.plansRepository.find();
  }
}