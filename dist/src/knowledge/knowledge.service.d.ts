import { Repository } from 'typeorm';
import { KnowledgeEntry } from './knowledge-entry.entity';
export declare class KnowledgeService {
    private knowledgeRepository;
    constructor(knowledgeRepository: Repository<KnowledgeEntry>);
    indexKnowledge(entryData: {
        title: string;
        category: string;
        content: object;
        version: number;
    }): Promise<KnowledgeEntry>;
    searchKnowledge(query: string, category?: string): Promise<KnowledgeEntry[]>;
}
