import PropTypes from 'prop-types';
import * as S from './styles';

const Input = ({ id, value, placeholder, label, register, type, onChange }) => {
  return (
    <S.InputGroup>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} {...register} />
    </S.InputGroup>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.object,
  onChange: PropTypes.func,
};