import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import * as Yup from 'yup';

import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

import { Container, Header, BackButton, Content, User, FormContainer, ButtonContainer } from './styles';

import Photo from '../../assets/photo.png';
import Camera from '../../assets/icons/camera.svg';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
    name: string;
    email: string;
    password: string;
}

const Profile: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { user } = useAuth();

    const handleSubmit = useCallback(
        async (data: ProfileFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    name: Yup.string().required('Nome obrigatório.'),
                    email: Yup.string().required('Email obrigatório.'),
                    password: Yup.string().required('Senha obrigatória.'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                const { name, email, password } = data;

                const formData = {
                    name,
                    email,
                    password
                };

                const response = await api.put('register', formData);

            } catch (err) {
                console.log('Erro detectado');
            }
        }, 
        
        [],
    );

    return (
        <Container>
            <Header>
                <BackButton>
                    <Link to="/home">
                <span>
                    <FiArrowLeft
                    size={40}
                    color={'#FFFFFF'}
                    />
                </span>
                </Link>
                </BackButton>
                <h1>Editar Perfil</h1>     

            </Header>

            <Content>
                <User>
                    <img className="user" src={Photo} alt="User"/>
                    <button>
                        <img className="camera" src={Camera} alt="Camera"/>
                    </button>
                </User>

                <Form ref={formRef} onSubmit={handleSubmit}>
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
                            labelName="Senha atual"
                            placeholder="Senha atual"
                        />

                        <InputForm
                            name="password"
                            type="password"
                            icon={FiLock}
                            required={true}
                            labelName="Nova senha"
                            placeholder="Nova senha"
                        />

                        <InputForm
                            name="password"
                            type="password"
                            icon={FiLock}
                            required={true}
                            labelName="Repetir senha"
                            placeholder="Repetir senha"
                        />

                        <ButtonContainer>
                <Button type="submit">Salvar alterações</Button>
              </ButtonContainer>
                        
                    </FormContainer>
                </Form>



            

            </Content>
                
            
        </Container>
    )
}

export default Profile;