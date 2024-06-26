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