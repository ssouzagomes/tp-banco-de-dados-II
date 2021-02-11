import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form } from '@unform/web';
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";

import Button from '../../components/Button/index'
import InputForm from '../../components/InputForm';
import { useToast } from '../../hooks/toast';

import api from '../../services/api'

import {
  ContentContainer,
  Content,
  BackButton,
  FormContainer,
  ButtonContainer
} from './styles';

interface UserFormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: UserFormData) => {
      try {
        console.log(data)

        await api.post('register', {
          name: data.name,
          email: data.email,
          password: data.password
        })

        addToast({
          type: 'success',
          title: `Usuário ${data.name} criado com sucesso!`,
        });

        console.log("Usuário cadastrado!")

        history.push('/home');
      } catch (error) {
        console.log(error)
      }
    },
    [history, addToast],
  );

  return (
    <>
      <ContentContainer>
        <Content>
          <BackButton>
            <Link to="/">
              <span>
                <FiArrowLeft
                  size={40}
                  color={'#3D3D4D'}
                />
              </span>
            </Link>
          </BackButton>

          <h1>Crie a sua conta.</h1>

          <h3>
            Faça o seu cadastro de forma <br/>
            rápida e fácil.
          </h3>

          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <InputForm
                name="name"
                icon={FiUser}
                required={true}
                labelName="Nome"
                placeholder="Nome"
              />

              <InputForm
                name="email"
                type="email"
                icon={FiMail}
                required={true}
                labelName="Email"
                placeholder="Email"
              />
                
              <InputForm
                name="password"
                type="password"
                icon={FiLock}
                required={true}
                labelName="Senha"
                placeholder="Senha"
              />

              <ButtonContainer>
                <Button type="submit">Cadastrar</Button>
              </ButtonContainer>
            </FormContainer>
          </Form>
        </Content>
      </ContentContainer>
    </>
  );
};
export default Register;