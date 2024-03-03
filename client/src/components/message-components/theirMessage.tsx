import { Div, Paragraph, Title } from "@vkontakte/vkui";
import "./message.style.css";
import { messageProps } from "../../types/types";

const TheirMessage = ({ text, name }: messageProps) => {
  return (
    <Div className="message message-start">
      <Div className="message-wrap their-message-wrap">
        <Title level="3">{name}</Title>
        <Paragraph>{text}</Paragraph>
      </Div>
    </Div>
  );
};

export default TheirMessage;
