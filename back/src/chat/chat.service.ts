import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class ChatService {
  async MakeHiMessageForNewUser(userSocket: Socket, username: string) {
    userSocket.emit('hiMessage', `Hi ${username}`);
  }
}
