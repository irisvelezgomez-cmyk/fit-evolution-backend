import { LogEntry } from '../logs/log-entry.entity';
export declare enum UserRole {
    CLIENT = "CLIENT",
    COACH = "COACH",
    ADMIN = "ADMIN"
}
export declare class User {
    id: string;
    email: string;
    passwordHash: string;
    role: UserRole;
    firstName?: string;
    lastName?: string;
    createdAt: Date;
    logEntries: LogEntry[];
}
