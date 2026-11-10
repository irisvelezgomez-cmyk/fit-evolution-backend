import { Controller, Get, Query, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { KnowledgeService } from './knowledge.service';
import { RolesGuard } from '../users/guards/roles.guard';
import { Roles } from '../users/decorators/roles.decorator';
import { UserRole } from '../users/user.entity';

@Controller('knowledge')
export class KnowledgeController {
    constructor(private readonly knowledgeService: KnowledgeService) {}

    /**
     * Executes the complex, hierarchical full-text search (Client/Coach action).
     * Accessible by all authenticated users.
     */
    @Get('search')
    @UseGuards(RolesGuard)
    async searchKnowledge(@Query('query') query: string, @Query('category') category: string) {
        return this.knowledgeService.searchKnowledge(query, category);
    }

    /**
     * System endpoint: Indexes a new piece of knowledge (Admin/System action).
     * Restricted to Admin role.
     */
    @Post('index')
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    async indexEntry(@Body() entryData: { title: string, category: string, content: object, version: number }) {
        return this.knowledgeService.indexKnowledge(entryData);
    }
}