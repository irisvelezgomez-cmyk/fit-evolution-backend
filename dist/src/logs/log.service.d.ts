import { Repository } from 'typeorm';
import { LogEntry, LogType, LogDetails } from './log-entry.entity';
export declare class LogService {
    private logsRepository;
    constructor(logsRepository: Repository<LogEntry>);
    submitLogEntry(logData: {
        logType: LogType;
        details: LogDetails;
        notes?: string;
    }, userId: string): Promise<LogEntry>;
    getLogsByDateRange(userId: string, startDate?: Date, endDate?: Date): Promise<LogEntry[]>;
}
