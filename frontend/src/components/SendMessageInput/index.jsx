import { renderIcon } from "../../utils/iconGallery";
import * as S from "./styles";

const SendMessageInput = ({ onSubmit }) => {
  return (
    <S.Form>
        <S.InputContainer>
            <S.SendMessageInput placeholder="Digite uma mensagem para o bot" />
            <S.SendMessageButton>{renderIcon({ name: "send", color: "#2B2B2B", size: 12 })}</S.SendMessageButton>
        </S.InputContainer>
    </S.Form>
  );
};

export default SendMessageInput;