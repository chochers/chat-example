import {
  Panel,
  PanelHeader,
  Group,
  Div,
  Footer,
  FixedLayout,
  Textarea,
  Button,
} from "@vkontakte/vkui";
import { Header, MyMessage, TheirMessage } from "../components";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { useUnit } from "effector-react";
import { $user } from "../store/user";

const Chat = ({ id, go }: any) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState('');
  const user = useUnit($user);
  const [listMessage, setListMessage] = useState<any>([]);

  useEffect(() => {
    if (user) {
      const socketConnection = io('http://localhost:3000', {
        query: { username: user },
      });

      setSocket(socketConnection);

      console.log(socketConnection);
    }
  }, [user]);

  useEffect(() => {
    if (socket) {

      socket.on('hiMessage', (data) => {
        console.log(data);
      });

      socket.on('userMessage', (data) => {
        const newMessage = {
          user: data.user,
          message: data.message
        }
        setListMessage((prevList: any) => [...prevList, newMessage]);
        console.log(data);
      });

    }
  }, [socket]);

  const sendMessage = () => {
    if (socket) {
      socket.emit('message', { message });
      setMessage('');
    }
  }

  return (
    <Panel id={id}>
      <Div>
        <Header />
        <Group>
          {listMessage.map((el: any, i: number) => {
            if (el.user == user) {
              return <MyMessage key={i} name={el.user} text={el.message} />
            } else {
              return <TheirMessage key={i} name={el.user} text={el.message} />
            }
          })}
        </Group>
      </Div>
      <Div style={{ marginTop: "90px" }}>
        <FixedLayout filled vertical="bottom">
          <Footer style={{ display: "flex", gap: "20px" }}>
            <Textarea
              style={{ width: "70%" }}
              placeholder="Введите сообщение..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={sendMessage}>Отправить</Button>
          </Footer>
        </FixedLayout>
      </Div>
    </Panel>
  );
};

export default Chat;
