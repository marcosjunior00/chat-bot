import { useState } from 'react'
import { useForm } from 'react-hook-form';
import Dialog from '../../components/Dialog'
import * as S from './styles';
import Input from '../../components/Input';
import renderIcon from '../../utils/iconGallery';

const Home = () => {
    const { register, handleSubmit, reset } = useForm();
    const [dialogIsOpen, setDialogIsOpen] = useState(true);
    const [userName, setUserName] = useState("");

    const onSubmit = (data) => {
        console.log({ data })
        setUserName(data.name);
        setDialogIsOpen(false);
        reset();
    };

    return (
        <>
            <Dialog title="Bem-vindo(a)" isOpen={dialogIsOpen} onClose={() => setDialogIsOpen(false)} closeIsDisabled>
                <S.UserForm onSubmit={handleSubmit(onSubmit)}>
                    {/* <label htmlFor="name">Name:</label>
                    <input id="name" name="name" {...register('name', { required: true })} /> */}
                    <Input id='name' placeholder='Digite o seu nome para continuar' label='Nome do usuário:' register={register('name', { required: true })} />
                    <S.SubmitButton type="submit">Enviar</S.SubmitButton>
                </S.UserForm>
            </Dialog>

            {!dialogIsOpen && userName.trim() !== "" && (
                <S.Container>
                    <S.UserData>
                        {renderIcon({ name: 'user', color: '#fff', size: 16 })}
                        <h2 style={{ color: "#fff" }}>{userName}</h2>
                    </S.UserData>
                </S.Container>
            )}
        </>
    )
}

export default Home