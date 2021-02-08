import React, {useRef, useCallback} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import * as Yup from 'yup';

import Button from '../../components/Button/index'
import api from '../../../../backend/src/services/api'

import {
  ContentContainer,
  Content,
  BackButton,
  FormContainer,
  InputName,
  InputEmail,
  InputPassword,
  ButtonContainer
} from './styles';

interface UserFormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: UserFormData) => {
      try {
        formRef.current?.setErrors({});
 
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório.'),
          email: Yup.string().email().required('Email obrigatório.'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('register', {
          name: data.name,
          email: data.email,
          password: data.password
        })

        // addToast({
        //   type: 'success',
        //   title: `Usuário ${data.name} criado com sucesso!`,
        // });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          console.log(error)
        }
      }
    },
    [history],
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

          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormContainer>
            <InputName>
                <div>
                  <FiUser
                    size={23}
                    color={'#7A7A80'}
                  />
                </div>

                <input
                  type="name"
                  name="name"
                  placeholder="Nome"
                />
              </InputName>

              <InputEmail>
                <div>
                  <FiMail
                    size={23}
                    color={'#7A7A80'}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </InputEmail>
              
              <InputPassword>
                <div>    
                  <FiLock
                    size={23}
                    color={'#7A7A80'}
                  />
                </div>
                
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
              </InputPassword>
              
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