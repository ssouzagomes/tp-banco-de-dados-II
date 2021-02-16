import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Container, Header, Form } from './styles';

import  Loupe  from '../../assets/icons/loupe.svg';

import NavBar from '../../components/NavBar';
import Items from '../../components/Items';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    return (
        <Container>
            <NavBar/>
            <Header>
                <h1>Listagem</h1>
                <span>6 carros</span>
            </Header>
            <main>
                <Form ref={formRef} onSubmit={() => {}}>
                    <input 
                        type="text"
                        name="car"
                        placeholder="Qual carro você precisa ?"
                    />
                
                    <button type="submit">
                        <img src={Loupe} alt=""/>
                    </button>
                </Form>  

                <div className="items">
                    <Link to="/details">
                        <Items/>
                    </Link>

                    <Link to="/details">
                        <Items/>
                    </Link>

                    <Link to="/details">
                        <Items/>
                    </Link>
                    
                </div>
                

            </main>
        </Container>
         
        
    );
}

export default Home;