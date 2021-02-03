import React from 'react';

import { Container } from './styles';

import NavBar from '../../components/NavBar';
import Header from '../../components/Header';

const Home: React.FC = () => {

    return (
        <Container>
            <NavBar/>
            <Header/>
        </Container>
         
        
    );
}

export default Home;