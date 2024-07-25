import styled from "styled-components";

export const UserForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px
`;

export const SubmitButton = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export const UserData = styled.div`
    position: absolute;
    top: 18px;
    left: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const UserName = styled.h4`
    color: #fff;
    font-weight: 300;
`;

/* ------------ CHAT ------------ */
export const ChatContainer = styled.div`
    border: 1px solid #383838;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    height: 70%;
    min-width: 350px;
    width: 70%;
`;

export const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border-bottom: 1px solid #383838;
`;

export const ChatName = styled.h4`
    font-weight: 400;
`;

export const ClearChatButton = styled.button`
    background: none;
    padding: 6px 8px;
    border: 1px solid #383838;
    border-radius: 12px;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 1;
    }
`;

export const SendMessageContainer = styled.div`
    padding: 0 14px 12px;
`;