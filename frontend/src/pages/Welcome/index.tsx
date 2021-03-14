import React from 'react';
import { Link } from 'react-router-dom'
import {
  ContentContainer,
  Content,
  ButtonsContainer
} from './styles';


import Logo from '../../assets/Logo.svg'


const Welcome: React.FC = () => {


  return (
    <>
      <ContentContainer>
        <Content>
          <img src={Logo} alt="Logo"/>

          <h1>
            Seja <br/> Bem-vindo
          </h1>

          <h3>
            O que você deseja fazer?
          </h3>

          <ButtonsContainer>
            <Link to="login">
              <button id="login" name="login">
                Entrar
              </button>
            </Link>

            <Link to="register">
              <button id="register" name="register">
                Cadastrar
              </button>
            </Link>
          </ButtonsContainer>
        </Content>
      </ContentContainer>
    </>
  );
};
export default Welcome;