import React from 'react';

import { Container, Header, Title, Price } from './styles';

import Lambo from '../../assets/Lambo.png';
import Energia from '../../assets/icons/Energia.svg';

export interface Car {
    name: String;
    price: String;
    image: String;
    fuel: String;
}

const Items: React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>
                        <span>Lamborghini</span>
                        <strong>Huracan</strong>
                    </Title>

                    <Price>
                        <span>AO DIA</span>
                        <strong>R$ 580</strong>
                    </Price>
            </Header>
            
            <img className="car" alt="Lamborghini" src={Lambo} />
            <img className="energy" alt="Energy" src={Energia} />
        </Container>
    );
}

export default Items;