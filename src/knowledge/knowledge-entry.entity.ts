// src/knowledge/knowledge-entry.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Represents an entry in the hierarchical encyclopedia.
 * This data structure is what gets indexed by Elasticsearch/Algolia.
 */
@Entity('knowledge_entries')
export class KnowledgeEntry {
    @PrimaryGeneratedColumn('uuid')
    entryId: string;

    @Column({ length: 100 })
    title: string; // Short, descriptive title

    @Column({ length: 100 })
    category: string; // E.g., 'Rehabilitation', 'Cardio Training', 'Macro Diet'

    // The core data structure. Using JSONB to maintain hierarchy.
    @Column({ type: 'jsonb' })
    content: object;

    @Column({ type: 'integer' })
    version: number; // For tracking content updates

    @Column({ type: 'timestamp' })
    createdAt: Date;
}