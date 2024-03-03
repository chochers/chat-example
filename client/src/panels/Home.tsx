import "@vkontakte/vkui/dist/vkui.css";
import {
  Button,
  Div,
  FormLayout,
  FormLayoutGroup,
  Input,
  Panel,
  PanelHeader,
  Title,
} from "@vkontakte/vkui";
import { useState } from "react";
import "../style/style.css";
import { useUnit } from "effector-react";
import { $user, setUser } from "../store/user";

const Home = ({ id, go }: any) => {
  const user = useUnit($user);

  const handleLogin = () => {
    go("chat");
  };

  return (
    <Panel id={id}>
      <PanelHeader>Вход в чат</PanelHeader>
      <Div className="home-wrap">
        <FormLayout className="form">
          <FormLayoutGroup>
            <Input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Ваше имя"
            />
          </FormLayoutGroup>
          <Button
            size="l"
            stretched
            style={{ marginTop: 20 }}
            onClick={handleLogin}
          >
            Войти
          </Button>
        </FormLayout>
      </Div>
    </Panel>
  );
};

export default Home;
