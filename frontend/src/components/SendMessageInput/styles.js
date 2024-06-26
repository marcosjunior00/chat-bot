import styled from 'styled-components';

export const Form = styled.form``;

export const InputContainer = styled.div`
    width: 100%;
    background-color: #2B2B2B;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
`;

export const SendMessageInput = styled.input`
    background: none;
    flex: 8;
    padding: 8px 12px;
    outline: none;
    border: none;
`;

export const SendMessageButton = styled.button`
    background-color: #fff;
    border: none;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    padding: 2px 4px;
    border-radius: 4px;
    cursor: pointer;
`;