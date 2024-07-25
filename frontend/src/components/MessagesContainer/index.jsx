import PropTypes from 'prop-types';
import * as S from "./styles";
import { useEffect, useRef } from 'react';

const MessagesContainer = ({ messages }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  return (
    <S.Container ref={containerRef}>
      {messages?.length > 0 && messages.map((message, index) => (
        <S.MessageBox key={index + 1} $botMessage={message.role === "assistant"}>
          <S.RecipientName>{message.role === "user" ? "Você" : "Bot"}</S.RecipientName>
          <S.MessageText>{message.content}</S.MessageText>
        </S.MessageBox>
      ))}
    </S.Container>
  );
};

export default MessagesContainer;

MessagesContainer.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
}