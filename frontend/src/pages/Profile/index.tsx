import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

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

import api from '../../services/api';

interface UserFormData {
    email: string,
    password: string,
    newPassword: string
}

const Profile: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const history = useHistory();


    // const [dataUser, setDataUser] = useState(() => {
    //     const user = localStorage.getItem('@RENTX:loggedUser');
    
    //     if (user) {
    //         return { user: JSON.parse(user) };
    //     }
    
    //     return {};
    // });;

    // console.log(dataUser.user.name)


    const handleSubmit = useCallback(
        async (data: UserFormData) => {
          try {
            formRef.current?.setErrors({});
    
            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório'),
                password: Yup.string().required('Senha obrigatória.'),
                newPassword: Yup.string().required('Nova senha obrigatória.'),
            });
      
            await schema.validate(data, {
                abortEarly: false,
            });
    
            await api.put('resetPassword', data)

            alert('Usuário editado com sucesso!')

            history.push('/home')
          } catch (error) {
            console.log(error)

            alert('Email ou senha inválido(s)!')
          }
        },
        [history],
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
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <FormContainer>
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
                            name="newPassword"
                            type="password"
                            icon={FiLock}
                            required={true}
                            labelName="Nova senha"
                            placeholder="Nova senha"
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