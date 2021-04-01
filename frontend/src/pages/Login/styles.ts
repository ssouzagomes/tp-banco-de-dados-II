import styled from 'styled-components';

export const ContentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #FFF;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    font-size: 56px;
    color: #3D3D4D;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 24px;
    color: #7A7A80;
    text-align: center;
    line-height: 32px;
    margin-bottom: 48px
  }

  input {
    border: none;
    border-radius: 4px;
    padding-left: 6px;
    margin-left: 4px;
    margin-bottom: 16px;

    width: 256px;
    height: 48px;

    font-size: 18px;
    background-color: #F2F2FA;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  left: 90px;
  top: 50px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ForgotPasswordContainer = styled.div`
  width: 308px;
  
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #737380;
    font-size: 14px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  outline: none;

  margin-top: 16px;
`