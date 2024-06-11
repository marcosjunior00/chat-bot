import * as S from './styles';
import PropTypes from 'prop-types';

const Dialog = ({ title = 'Olá, mundo!', children, isOpen, onClose, closeIsDisabled }) => {
    if (!isOpen) return

    return (
        <S.DialogWrapper>
            <S.DialogContent>
                <S.DialogHeader>
                    <S.DialogTitle>{title}</S.DialogTitle>
                    {!closeIsDisabled && <S.CloseButton onClick={onClose}>x</S.CloseButton>}
                </S.DialogHeader>
                <S.DialogBody>
                    {children}
                </S.DialogBody>
            </S.DialogContent>
        </S.DialogWrapper>
    )
}

export default Dialog;

Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    closeIsDisabled: PropTypes.bool,
};