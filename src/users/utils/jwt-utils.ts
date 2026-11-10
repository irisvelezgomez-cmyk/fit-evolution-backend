// src/users/utils/jwt-utils.ts
/**
 * NOTE: This is a placeholder. In a real app, this would use @nestjs/jwt library
 * with a secret key loaded from environment variables.
 */
import { UserRole } from '../user.entity';

export function generateToken(userId: string, role: UserRole): string {
  return `MOCKED_JWT_${userId}_${role}`;
}