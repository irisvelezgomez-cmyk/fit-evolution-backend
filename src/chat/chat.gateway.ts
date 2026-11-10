// src/chat/chat.gateway.ts
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { User } from '../users/user.entity';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly chatService: ChatService) {}

    handleConnection(@ConnectedSocket() client: Socket) {
        // En una implementación real con JWT, el usuario se extrae del handshake. 
        // Aquí simulamos un usuario temporal para pruebas si es necesario.
        const mockUser: User = client.handshake.auth?.user || { id: 'MOCKED_CLIENT_ID', email: 'client@test.com' } as any;
        this.chatService.connect(client.id, mockUser);
        client.data.user = mockUser;
    }

    handleDisconnect(@ConnectedSocket() client: Socket) {
        this.chatService.disconnect(client.id);
    }

    @SubscribeMessage('send_message')
    handleMessage(@MessageBody() data: { toUserId: string, message: string }, @ConnectedSocket() client: Socket) {
        const sender = client.data.user;
        if (!sender) return;

        // Enviamos el mensaje y lo emitimos a través del servidor de WebSockets
        this.chatService.sendMessage(data.toUserId, data.message, sender.id, this.server);
    }
}