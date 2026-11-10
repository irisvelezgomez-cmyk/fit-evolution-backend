import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LogEntry } from '../logs/log-entry.entity';

export enum UserRole {
  CLIENT = 'CLIENT',
  COACH = 'COACH',
  ADMIN = 'ADMIN',
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  passwordHash!: string;

  @Column({ type: 'varchar', enum: UserRole, default: UserRole.CLIENT })
  role!: UserRole;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  // Relación inversa con LogEntry colocada dentro de la clase
  @OneToMany(() => LogEntry, logEntry => logEntry.user)
  logEntries!: LogEntry[];
}