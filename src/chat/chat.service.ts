// src/chat/chat.service.ts
import { Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';
import { Logger } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class ChatService { // 👈 Debe llamarse ChatService
    private readonly logger = new Logger(ChatService.name);
    private activeConnections = new Map<string, User>();
    private userSocketMap = new Map<string, Set<string>>();

    connect(socketId: string, user: User) {
        this.activeConnections.set(socketId, user);
        if (!this.userSocketMap.has(user.id)) {
            this.userSocketMap.set(user.id, new Set());
        }
        this.userSocketMap.get(user.id)?.add(socketId);
        this.logger.log(`Client connected: ${user.email} (${user.id}) on socket ${socketId}`);
    }

    disconnect(socketId: string) {
        const user = this.activeConnections.get(socketId);
        if (user) {
            this.activeConnections.delete(socketId);
            const sockets = this.userSocketMap.get(user.id);
            if (sockets) {
                sockets.delete(socketId);
                if (sockets.size === 0) {
                    this.userSocketMap.delete(user.id);
                }
            }
            this.logger.log(`Client disconnected: ${user.email} (${user.id}) on socket ${socketId}`);
        }
    }

    async sendMessage(targetUserId: string, message: string, senderId: string, server?: Server): Promise<boolean> {
        const sockets = this.userSocketMap.get(targetUserId);
        if (!sockets || sockets.size === 0) {
            this.logger.warn(`Target user ${targetUserId} is not currently connected.`);
            return false;
        }

        const messagePayload = {
            senderId: senderId,
            content: message,
            timestamp: new Date().toISOString(),
        };

        sockets.forEach(socketId => {
            if (server) {
                server.to(socketId).emit('new_message', messagePayload);
            }
            this.logger.debug(`[CHAT] Sending message to socket ${socketId}`);
        });
        return true;
    }
}