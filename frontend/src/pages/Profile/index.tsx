import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

import { 
    Container,
    Header,
    BackButton,
    Content,
    FormContainer,
    ButtonContainer
} from './styles';

const Profile: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

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
                <Form ref={formRef} onSubmit={() => {}}>
                    <FormContainer>
                        <InputForm
                            name="nome"
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