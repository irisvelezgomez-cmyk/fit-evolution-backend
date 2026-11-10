// src/logs/log-entry.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

export enum LogType {
    WORKOUT = 'WORKOUT',
    MEAL = 'MEAL',
}

// Interface for detailed log data (Workout or Meal)
// This maps to the JSON/Object column
export interface LogDetails {
    // For WORKOUT:
    exercises?: { name: string; sets: number; reps: number; weight: number; rir?: number };
    // For MEAL:
    items?: { name: string; calories: number; macros: { protein: number; fat: number; carbs: number } };
    // Shared fields
    notes?: string;
}

@Entity('log_entries')
export class LogEntry {
    @PrimaryGeneratedColumn('uuid')
    logEntryId: string;

    // Foreign Key to the user who submitted the log
    @ManyToOne(() => User, user => user.logEntries, { onDelete: 'CASCADE' })
    user: User;

    @Column({ type: 'varchar' }) // 👈 Cambiado a varchar para SQLite
    logType: LogType;

    @Column({ type: 'date' })
    entryDate: Date; // Date of the activity/meal

    // Details stored as flexible object compatible with SQLite
    @Column({ type: 'simple-json' }) // 👈 Cambiado a simple-json para SQLite
    details: LogDetails;

    @Column({ nullable: true })
    notes: string;
}