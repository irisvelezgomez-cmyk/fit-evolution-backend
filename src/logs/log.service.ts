// src/logs/log.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogEntry, LogType, LogDetails } from './log-entry.entity';
import { User } from '../users/user.entity'; // Assuming User entity is available

@Injectable()
export class LogService {
    constructor(
        @InjectRepository(LogEntry)
        private logsRepository: Repository<LogEntry>,
        // In a full system, we would inject UserService here to validate user ownership
    ) {}

    /**
     * Submits a new workout or meal log entry (Client action).
     * @param logData The data of the entry.
     * @param userId The ID of the client submitting the log.
     * @returns The saved LogEntry.
     */
    async submitLogEntry(logData: { logType: LogType, details: LogDetails, notes?: string }, userId: string): Promise<LogEntry> {
        // TODO: Implement ownership check

        const newLog = this.logsRepository.create({
            logType: logData.logType,
            details: logData.details,
            notes: logData.notes,
            entryDate: new Date(), // Use current time, client can override this
            user: { id: userId } as User, // Simplified relationship creation
        });

        return this.logsRepository.save(newLog);
    }

    /**
     * Retrieves all log entries for a given user within a date range (Both roles).
     * @param userId The ID of the user.
     * @param startDate Optional start date filter.
     * @param endDate Optional end date filter.
     * @returns An array of LogEntry objects.
     */
    async getLogsByDateRange(userId: string, startDate?: Date, endDate?: Date): Promise<LogEntry[]> {
        // TODO: Implement ownership check

        return this.logsRepository.find({
            where: { user: { id: userId } },
            order: { entryDate: 'DESC' },
        });
    }
}