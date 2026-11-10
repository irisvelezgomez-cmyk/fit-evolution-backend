import { User } from '../users/user.entity';
export declare enum LogType {
    WORKOUT = "WORKOUT",
    MEAL = "MEAL"
}
export interface LogDetails {
    exercises?: {
        name: string;
        sets: number;
        reps: number;
        weight: number;
        rir?: number;
    };
    items?: {
        name: string;
        calories: number;
        macros: {
            protein: number;
            fat: number;
            carbs: number;
        };
    };
    notes?: string;
}
export declare class LogEntry {
    logEntryId: string;
    user: User;
    logType: LogType;
    entryDate: Date;
    details: LogDetails;
    notes: string;
}
