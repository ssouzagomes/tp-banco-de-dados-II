import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
`;

export const Header = styled.header`
    padding: 4rem;
    max-width: 100%;
    height: 6rem;
    background-color: #1B1B1F;
    display: flex;
    flex-direction: column; 
    align-items: center;

    h1 {
        margin-top: -2.4rem;
        margin-left: 1.2rem;
        font-family: 'Archivo';
        font-weight: 600;
        font-size: 28pt;
    }
`;

export const BackButton = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 1.2rem;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin-top: 48px;

    input {
    border: none;
    border-radius: 4px;
    padding-left: 6px;
    margin-left: 4px;
    margin-bottom: 8px;

    width: 256px;
    height: 48px;

    font-size: 18px;
    background-color: #F2F2FA;
  }
    
`;

export const User = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2.4rem;

    position: relative;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .user {
            margin-top: -6.2rem;
        }
    
    .camera {
        position: absolute;
        margin-left: -3rem;
        transform: opacity 0.3s;

        &:hover {
            opacity: 0.9;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 12px;
`