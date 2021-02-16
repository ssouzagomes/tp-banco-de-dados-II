import React from 'react';
import { Container, Header, BackButton, Content, Car, Info, Settings, Time, Total } from './styles';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import Lambo from '../../assets/Lambo.png';

import Cambio from '../../assets/icons/Cambio.svg';
import Forcy from '../../assets/icons/Forca.svg';
import Gasoliny from '../../assets/icons/Gasolina.svg';
import People from '../../assets/icons/Pessoas.svg';
import Speed from '../../assets/icons/Speed.svg';
import Vector from '../../assets/icons/Vector.svg';

const Details: React.FC = () => {

    return (
        <Container>
            <Header>
                <BackButton>
                    <Link to="/home">
                        <span>
                            <FiArrowLeft 
                                size={24} 
                                color="#FFFFFF"
                            />
                        </span>
                    </Link>
                </BackButton>
            </Header>
            <Content>
                <Car>
                    <img src={Lambo} alt="Lambo"/>
                </Car>
                <Info>
                    <div className="name">
                        <small>LAMBORGHINI</small>
                        <span>Huracan</span>
                    </div>

                    <div className="price">
                        <small>AO DIA</small>
                        <span>R$ 580</span>
                    </div>
                </Info>

                <Settings>
                    <div>
                        <img src={Speed} alt=""/>
                        <small>380 Km/h</small>
                    </div>

                    <div>
                        <img src={Vector} alt=""/>
                        <small>3.2s</small>
                    </div>

                    <div>
                        <img src={Forcy} alt=""/>
                        <small>800 HP</small>
                    </div>
                    
                    <div>
                        <img src={Gasoliny} alt=""/>
                        <small>Gasolina</small>
                    </div>

                    <div>
                        <img src={Cambio} alt=""/>
                        <small>Auto</small>
                    </div>

                    <div>
                        <img src={People} alt=""/>
                        <small>2 pessoas</small>
                    </div>
                </Settings>

                <Time>
                    <div className="de">
                        <small>DE</small>
                        <span>18 de Julho de 2020</span>
                    </div>
                    <div className="arrow">
                        <br/>
                        <FiArrowRight size={24}/>
                    </div>
                    <div className="for">
                        <small>ATÉ</small>
                        <span>20 de Julho de 2020</span>
                    </div>
                </Time>

                <Total>
                    <small>TOTAL</small>
                    <div>
                        <span>R$ 580 x 3 diárias</span>
                        <span>R$ 2.980</span>
                        <Button>
                            Alugar Agora
                        </Button>
                    </div>
                </Total>
            </Content>
        </Container>
    );
}

export default Details;