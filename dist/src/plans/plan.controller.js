"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanController = void 0;
const common_1 = require("@nestjs/common");
const plan_service_1 = require("./plan.service");
const plan_entity_1 = require("./plan.entity");
const roles_guard_1 = require("../users/guards/roles.guard");
const roles_decorator_1 = require("../users/decorators/roles.decorator");
const user_entity_1 = require("../users/user.entity");
const assign_plan_dto_1 = require("./dto/assign-plan.dto");
let PlanController = class PlanController {
    planService;
    constructor(planService) {
        this.planService = planService;
    }
    async assignPlan(assignPlanDto) {
        const coachId = 'MOCKED_COACH_ID';
        const userId = assignPlanDto.targetUserId;
        const planPayload = {
            planType: assignPlanDto.type || plan_entity_1.PlanType.WORKOUT,
            description: assignPlanDto.description || assignPlanDto.planData?.description || 'Sin descripción',
            metadata: {
                name: assignPlanDto.name || assignPlanDto.planData?.name || 'Plan de Entrenamiento',
                durationWeeks: assignPlanDto.durationWeeks || assignPlanDto.planData?.durationWeeks || 4,
            },
        };
        return this.planService.assignPlan(planPayload, coachId, userId);
    }
    async getMyPlans() {
        const userId = 'MOCKED_CLIENT_ID';
        return this.planService.getActivePlans(userId);
    }
};
exports.PlanController = PlanController;
__decorate([
    (0, common_1.Post)('assign'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.COACH, user_entity_1.UserRole.ADMIN, user_entity_1.UserRole.CLIENT),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assign_plan_dto_1.AssignPlanDto]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "assignPlan", null);
__decorate([
    (0, common_1.Get)('my-plans'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.CLIENT, user_entity_1.UserRole.COACH),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "getMyPlans", null);
exports.PlanController = PlanController = __decorate([
    (0, common_1.Controller)('plans'),
    __metadata("design:paramtypes", [plan_service_1.PlanService])
], PlanController);
//# sourceMappingURL=plan.controller.js.map