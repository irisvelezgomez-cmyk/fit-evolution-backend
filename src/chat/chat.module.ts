// src/chat/chat.module.ts
import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { UserModule } from '../users/user.module'; // Dependency to get User entity/logic

@Module({
    imports: [
        UserModule // To interact with user data (e.g., get user from socket ID)
    ],
    providers: [ChatService, ChatGateway],
    exports: [ChatService], // Allow other services to use the connection manager
})
export class ChatModule {}