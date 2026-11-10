import { LogService } from './log.service';
import { LogType, LogDetails } from './log-entry.entity';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    submitLog(logData: {
        logType: LogType;
        details: LogDetails;
        notes?: string;
    }): Promise<import("./log-entry.entity").LogEntry>;
    getLogHistory(userId: string): Promise<import("./log-entry.entity").LogEntry[]>;
}
