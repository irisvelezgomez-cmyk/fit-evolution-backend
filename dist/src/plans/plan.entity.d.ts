export declare enum PlanType {
    DIET = "DIET",
    WORKOUT = "WORKOUT",
    CUSTOM = "CUSTOM"
}
export declare class Plan {
    id: string;
    type: PlanType;
    planData: object;
    createdAt: Date;
    updatedAt: Date;
}
