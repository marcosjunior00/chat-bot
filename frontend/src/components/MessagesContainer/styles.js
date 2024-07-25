import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 2px 12px;
    width: 100%;
    overflow-y: auto;
`;

export const MessageBox = styled.div`
    border: 1px solid #424242;
    background-color: #2B2B2B;
    padding: 8px;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-self: ${({ $botMessage }) => $botMessage ? "flex-start" : "flex-end"};
    border-radius: ${({ $botMessage }) => $botMessage ? "0 8px 8px 8px" : "8px 0 8px 8px"};
`;

export const RecipientName = styled.h4`
    font-weight: 200;
    color: #828282;
`;

export const MessageText = styled.p`
    font-size: 14px;
    padding: 0 4px;
`;