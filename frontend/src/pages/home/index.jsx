import { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Dialog from '../../components/Dialog';
import Input from '../../components/Input';
import { renderIcon } from '../../utils/iconGallery';
import * as S from '../home/styles';
import MessagesContainer from '../../components/MessagesContainer';
import SendMessageInput from '../../components/SendMessageInput';

const Home = () => {
    const { register, handleSubmit, reset } = useForm();
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [userName, setUserName] = useState("");
    const [messages, setMessages] = useState([]);

    // API REQUESTS --------------------------
    const fetchMessages = async name => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/memory/${userName || name}`);
            setMessages(data.data || []);

            if (!data.data || data.data.length === 0) {
                const message = { role: "assistant", content: "Olá, como posso te ajudar hoje?" };
                setMessages([message]);

                await axios.post(`${import.meta.env.VITE_API_URL}/api/memory`, { name: userName || name, message });
            }
        } catch (error) {
            console.error(error);
            console.error("Ocorreu um erro ao buscar as mensagens do histórico.");
        }
    };

    const onSubmit = async data => {
        const payload = {
            user: userName || name,
            message: data.message,
        };

        setMessages(prev => [...prev, { role: 'user', content: data.message }]);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/send`, payload);
            console.log({ data: response.data });
            if (response.data.response) {
                setMessages(prev => [...prev, { role: 'assistant', content: response.data.response }]);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleClearChat = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/memory/clear/${userName}`);
            setMessages([]);
            fetchMessages(userName);
        } catch (err) {
            console.error(err);
        }
    };

    // SET USER NAME -------------------------
    const handleOpenDialog = () => {
        setDialogIsOpen(true);
        setUserName("");
    };

    const DialogSubmit = (data) => {
        setUserName(data.name);
        localStorage.setItem("userName", data.name);
        setDialogIsOpen(false);
        reset();
    };

    useEffect(() => {
        const name = localStorage.getItem("userName");
        if (!name || name.trim() === "") return handleOpenDialog();
        else setUserName(name);

        fetchMessages(name);
    }, [userName])

    return (
        <>
            {!dialogIsOpen && userName.trim() !== "" && (
                <S.Container>
                    <S.UserData>
                        {renderIcon({ name: 'user', color: '#fff', size: 16 })}
                        <S.UserName style={{ color: "#fff" }}>{userName}</S.UserName>
                    </S.UserData>

                    <S.ChatContainer>
                        <S.ChatHeader>
                            <S.ChatName>ChatBot</S.ChatName>

                            <S.ClearChatButton onClick={handleClearChat}>
                                {renderIcon({ name: "broom", color: "#fff", size: 14 })}
                            </S.ClearChatButton>
                        </S.ChatHeader>

                        <MessagesContainer messages={messages} />

                        <S.SendMessageContainer>
                            <SendMessageInput onSubmit={onSubmit} />
                        </S.SendMessageContainer>
                    </S.ChatContainer>
                </S.Container>
            )}

            <Dialog title="Bem-vindo(a)" isOpen={dialogIsOpen} onClose={() => setDialogIsOpen(false)} closeIsDisabled>
                <S.UserForm onSubmit={handleSubmit(DialogSubmit)}>
                    <Input id='name' placeholder='Digite o seu nome para continuar' label='Nome do usuário:' register={register('name', { required: true })} />
                    <S.SubmitButton type="submit">Enviar</S.SubmitButton>
                </S.UserForm>
            </Dialog>
        </>
    );
};

export default Home;