import { User } from '../users/user.entity';
import { Server } from 'socket.io';
export declare class ChatService {
    private readonly logger;
    private activeConnections;
    private userSocketMap;
    connect(socketId: string, user: User): void;
    disconnect(socketId: string): void;
    sendMessage(targetUserId: string, message: string, senderId: string, server?: Server): Promise<boolean>;
}
