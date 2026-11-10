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
exports.KnowledgeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const knowledge_entry_entity_1 = require("./knowledge-entry.entity");
let KnowledgeService = class KnowledgeService {
    knowledgeRepository;
    constructor(knowledgeRepository) {
        this.knowledgeRepository = knowledgeRepository;
    }
    async indexKnowledge(entryData) {
        const entry = this.knowledgeRepository.create({
            title: entryData.title,
            category: entryData.category,
            content: entryData.content,
            version: entryData.version,
            createdAt: new Date(),
        });
        return this.knowledgeRepository.save(entry);
    }
    async searchKnowledge(query, category) {
        console.log(`[MOCK SEARCH] Executing search for "${query}" in category "${category}"...`);
        return [
            {
                entryId: 'mock-1',
                title: 'Advanced Plyometric Training',
                category: 'Advanced Training',
                content: { description: 'High intensity jump protocol.' },
                version: 1,
                createdAt: new Date(),
            },
            {
                entryId: 'mock-2',
                title: 'Protein Timing for Muscle Synthesis',
                category: 'Nutrition',
                content: { structure: 'Time-based macros.' },
                version: 2,
                createdAt: new Date(),
            },
        ];
    }
};
exports.KnowledgeService = KnowledgeService;
exports.KnowledgeService = KnowledgeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(knowledge_entry_entity_1.KnowledgeEntry)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KnowledgeService);
//# sourceMappingURL=knowledge.service.js.map