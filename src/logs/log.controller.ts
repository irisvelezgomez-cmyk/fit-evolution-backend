// src/logs/log.controller.ts
import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { LogService } from './log.service';
import { LogType, LogDetails } from './log-entry.entity';
// import { JwtAuthGuard } from '../users/guards/jwt-auth.guard'; // Placeholder

@Controller('logs')
export class LogController {
    constructor(private readonly logService: LogService) {}

    /**
     * Client endpoint: Submits a new workout or meal entry.
     */
    @Post()
    // @UseGuards(JwtAuthGuard)
    async submitLog(@Body() logData: { logType: LogType; details: LogDetails; notes?: string }) {
        // In a real scenario, the JWT payload would provide the userId.
        const userId = 'MOCKED_CLIENT_ID';
        return this.logService.submitLogEntry(logData, userId);
    }

    /**
     * Both roles endpoint: Retrieves log history for a user.
     */
    @Get(':userId/history')
    // @UseGuards(JwtAuthGuard)
    async getLogHistory(@Param('userId') userId: string) {
        const startDate = new Date(2026, 10, 1); // Mock start date
        const endDate = new Date(2026, 11, 9); // Mock end date

        return this.logService.getLogsByDateRange(userId, startDate, endDate);
    }
}