import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server } from 'ws';
import { Socket } from 'socket.io';
import { MessageDTO } from './dto/message.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService) {}

  private users: Map<Socket, string> = new Map();

  handleConnection(client: Socket, ...args: any[]) {
    const username = client.handshake.query.username as string;

    this.chatService.MakeHiMessageForNewUser(client, username);

    this.server.emit('connectMessage', {
      user: username,
      message: 'User has been connected',
    });

    this.users.set(client, username);
  }

  handleDisconnect(client: Socket) {
    this.users.delete(client);

    const username = client.handshake.query.username as string;
    this.server.emit('disconnectMessage', {
      user: username,
      message: 'User has been disconnected',
    });
  }

  @SubscribeMessage('message')
  async SendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() messageData: MessageDTO,
  ) {
    const user = this.users.get(client)
    this.server.emit('userMessage', {user: user, message: messageData.message})
  }
}
