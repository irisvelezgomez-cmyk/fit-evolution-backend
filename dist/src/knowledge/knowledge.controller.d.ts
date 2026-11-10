import { KnowledgeService } from './knowledge.service';
export declare class KnowledgeController {
    private readonly knowledgeService;
    constructor(knowledgeService: KnowledgeService);
    searchKnowledge(query: string, category: string): Promise<import("./knowledge-entry.entity").KnowledgeEntry[]>;
    indexEntry(entryData: {
        title: string;
        category: string;
        content: object;
        version: number;
    }): Promise<import("./knowledge-entry.entity").KnowledgeEntry>;
}
