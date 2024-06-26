import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '../../components/Dialog';
import Input from '../../components/Input';
import { renderIcon } from '../../utils/iconGallery';
import * as S from '../home/styles';

const Home = () => {
    const { register, handleSubmit, reset } = useForm();
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [userName, setUserName] = useState("");

    const handleOpenDialog = () => {
        setDialogIsOpen(true);
        setUserName("");
    };

    const onSubmit = (data) => {
        console.log({ data });
        setUserName(data.name);
        localStorage.setItem("userName", data.name);
        setDialogIsOpen(false);
        reset();
    };

    useEffect(() => {
        const name = localStorage.getItem("userName");
        if (!name || name.trim() === "") handleOpenDialog();
        else setUserName(name);
    }, [])

    return (
        <>
            {!dialogIsOpen && userName.trim() !== "" && (
                <S.Container>
                    <S.UserData>
                        {renderIcon({ name: 'user', color: '#fff', size: 16 })}
                        <S.UserName style={{ color: "#fff" }}>{userName}</S.UserName>
                    </S.UserData>
                </S.Container>
            )}

            <Dialog title="Bem-vindo(a)" isOpen={dialogIsOpen} onClose={() => setDialogIsOpen(false)} closeIsDisabled>
                <S.UserForm onSubmit={handleSubmit(onSubmit)}>
                    <Input id='name' placeholder='Digite o seu nome para continuar' label='Nome do usuário:' register={register('name', { required: true })} />
                    <S.SubmitButton type="submit">Enviar</S.SubmitButton>
                </S.UserForm>
            </Dialog>
        </>
    );
};

export default Home;