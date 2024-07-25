import { useForm } from "react-hook-form";
import { renderIcon } from "../../utils/iconGallery";
import * as S from "./styles";
import PropTypes from "prop-types";

const SendMessageInput = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitSendMessageInput = data => {
    onSubmit(data);
    reset();
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitSendMessageInput)}>
        <S.InputContainer>
            <S.SendMessageInput placeholder="Digite uma mensagem para o bot" {...register("message")} />
            <S.SendMessageButton type="submit">{renderIcon({ name: "send", color: "#2B2B2B", size: 12 })}</S.SendMessageButton>
        </S.InputContainer>
    </S.Form>
  );
};

export default SendMessageInput;

SendMessageInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};