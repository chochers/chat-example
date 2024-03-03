import { Icon24MessageOutline, Icon28MessageOutline } from "@vkontakte/icons";
import {
  Avatar,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderContent,
  View,
} from "@vkontakte/vkui";
import Ava from "../img/ava.jpg";

const Header = () => {
  return (
    <View activePanel="brand">
      <Panel id="brand">
        <PanelHeader
          after={
            <PanelHeaderButton>
              IconCompact={Icon24MessageOutline}
              IconRegular={Icon28MessageOutline}
            </PanelHeaderButton>
          }
        >
          <PanelHeaderContent before={<Avatar size={36} src={Ava} />}>
            Группа пикабушников
          </PanelHeaderContent>
        </PanelHeader>
      </Panel>
    </View>
  );
};

export default Header;
