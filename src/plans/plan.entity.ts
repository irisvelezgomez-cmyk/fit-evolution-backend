import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum PlanType {
  DIET = 'DIET',
  WORKOUT = 'WORKOUT',
  CUSTOM = 'CUSTOM',
}

@Entity({ name: 'plans' })
export class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', enum: PlanType })
  type: PlanType;

  @Column('jsonb')
  planData: object;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: Date;
}