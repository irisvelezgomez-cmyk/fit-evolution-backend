// src/users/guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    let user = request.user;

    // Solución temporal para el token mock: si no hay user pero viene el token Bearer, leemos el rol del token
    if (!user && request.headers.authorization) {
      const token = request.headers.authorization.replace('Bearer ', '');
      if (token.includes('_CLIENT')) {
        user = { role: UserRole.CLIENT };
      } else if (token.includes('_COACH')) {
        user = { role: UserRole.COACH };
      } else if (token.includes('_ADMIN')) {
        user = { role: UserRole.ADMIN };
      }
    }

    return requiredRoles.some((role) => user && user.role === role);
  }
}