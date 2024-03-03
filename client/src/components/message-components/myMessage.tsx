import { Div, Paragraph, Title } from "@vkontakte/vkui";
import "./message.style.css";
import { messageProps } from "../../types/types";

const MyMessage = ({ text, name }: messageProps) => {
  return (
    <Div className="message message-end">
      <Div className="message-wrap my-message-wrap">
        <Title level="3">{name}</Title>
        <Paragraph>{text}</Paragraph>
      </Div>
    </Div>
  );
};

export default MyMessage;
