import PropTypes from 'prop-types';
import * as S from "./styles";

const MessagesContainer = ({ messages }) => {
  return (
    <S.Container>
      {messages.length > 0 && messages.map((message, index) => (
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