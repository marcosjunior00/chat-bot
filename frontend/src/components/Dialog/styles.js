import styled from 'styled-components';

export const DialogWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const DialogContent = styled.div`
    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    width: 500px;
    max-width: 100%;
    box-shadow: 4px 6px 10px rgba(255, 255, 255, 0.3);
`;

export const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 20px 26px;
`;

export const DialogTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 600;
    color: gray;
`;

export const DialogBody = styled.div`
    padding: 20px 26px;
    
`;