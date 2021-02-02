import styled from 'styled-components';

export const ContentContainer = styled.div`
  height: 100vh;
  background: #1B1B1F;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  img {
    margin-bottom: 32px;
  }

  h1 {
    font-size: 56px;
    text-align: center;

    margin-bottom: 32px;
  }

  h3 {
    margin-bottom: 48px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 550px;
  margin-bottom: 16px;

  button {
    border: none;
    text-decoration: none;
    width: 250px;
    height: 60px;

    border-radius: 4px;
    cursor: pointer;

    color: #E1E1E6;
    font-size: 24px;
    font-weight: bold;

    transition: 0.2s;
  }

  button#login {
    background-color: #DC1637;
  }

  button#register {
    background-color: #29292E;
  }

  #login:hover {
    background-color: #be1637;
  }

  #register:hover {
    background-color: #333338;
  }
`