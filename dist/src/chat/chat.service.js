"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChatService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let ChatService = ChatService_1 = class ChatService {
    logger = new common_2.Logger(ChatService_1.name);
    activeConnections = new Map();
    userSocketMap = new Map();
    connect(socketId, user) {
        this.activeConnections.set(socketId, user);
        if (!this.userSocketMap.has(user.id)) {
            this.userSocketMap.set(user.id, new Set());
        }
        this.userSocketMap.get(user.id)?.add(socketId);
        this.logger.log(`Client connected: ${user.email} (${user.id}) on socket ${socketId}`);
    }
    disconnect(socketId) {
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
    async sendMessage(targetUserId, message, senderId, server) {
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
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = ChatService_1 = __decorate([
    (0, common_1.Injectable)()
], ChatService);
//# sourceMappingURL=chat.service.js.map