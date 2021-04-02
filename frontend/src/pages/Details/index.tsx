import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link, useParams, useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import api from '../../services/api'

import Button from '../../components/Button';

import Lambo from '../../assets/Lambo.png';
import Cambio from '../../assets/icons/Cambio.svg';
import Forcy from '../../assets/icons/Forca.svg';
import Gasoliny from '../../assets/icons/Gasolina.svg';
import People from '../../assets/icons/Pessoas.svg';
import Speed from '../../assets/icons/Speed.svg';
import Vector from '../../assets/icons/Vector.svg';

import {
    Container,
    Header,
    BackButton,
    Content,
    Car,
    Info,
    Settings,
    Time,
    Total
} from './styles';

interface Params {
    id: string;
}

interface Listing {
    _id: string,
    price: number;
    vehicle: {
        model: string,
        manufacturer: string,
        acceleration: number,
        fuel: string,
        horsepower: string,
        seats: number,
        top_speed: number,
        transmission: string,
    };
    startDate: Date;
    endDate: Date;
}

const Details: React.FC = () => {
    const params = useParams<Params>();
    const history = useHistory();

    const [listing, setListings] = useState<Listing>()

    const [data, setData] = useState(() => {
        const user = localStorage.getItem('@RENTX:loggedUser');
    
        if (user) {
            return { user: JSON.parse(user) };
        }
    
        return {};
    });

    useEffect(() => {
        api.get(`getListing/${params.id}`).then(response => {

            const formattedListing =  {
                ...response.data,
                startDate: format(
                    parseISO(response.data.startDate),
                    'MM/dd/yyyy',
                ),
              
                endDate: format(
                    parseISO(response.data.endDate),
                    'MM/dd/yyyy',
                ),
            };

            setListings(formattedListing);
        });
    }, [params.id]);

    async function handleToCreateSchedule(user: string, listing: string) {
        try {
            await api.post('createSchedule', {
                user: user,
                listing: listing
            })

            alert('Carro alugado com sucesso!\nVerifique a página de agendamentos.')

            history.push('/home')
        } catch (error) {
            console.log(error)

            alert('Falha ao agendar! Tente novamente.')
        }
    }

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

            {listing !== undefined ? 
                <Content>
                    <Car>
                        <img src={Lambo} alt="Lambo"/>
                    </Car>

                    <Info>
                        <div className="name">
                            <small>{listing?.vehicle.manufacturer}</small>
                            <span>{listing?.vehicle.model}</span>
                        </div>

                        <div className="price">
                            <small>AO DIA</small>
                            <span>R$ {listing?.price}</span>
                        </div>
                    </Info>

                    <Settings>
                        <div>
                            <img src={Speed} alt="Speed"/>
                            <small>{listing?.vehicle.top_speed} Km/h</small>
                        </div>

                        <div>
                            <img src={Vector} alt="Vector"/>
                            <small>{listing?.vehicle.acceleration}s</small>
                        </div>

                        <div>
                            <img src={Forcy} alt="Forcy"/>
                            <small>{listing?.vehicle.horsepower} HP</small>
                        </div>
                        
                        <div>
                            <img src={Gasoliny} alt="Fuel"/>
                            <small>{listing?.vehicle.fuel}</small>
                        </div>

                        <div>
                            <img src={Cambio} alt="Cambio"/>
                            <small>{listing?.vehicle.transmission}</small>
                        </div>

                        <div>
                            <img src={People} alt="People"/>
                            <small>5 pessoas</small>
                        </div>
                    </Settings>

                    <Time>
                        <div className="de">
                            <small>DE</small>
                            <span>{format(new Date(listing?.startDate), 'dd/MM/yyyy')}</span>
                        </div>
                        <div className="arrow">
                            <br/>
                            <FiArrowRight size={24}/>
                        </div>
                        <div className="for">
                            <small>ATÉ</small>
                            <span>{format(new Date(listing?.endDate), 'dd/MM/yyyy')}</span>
                        </div>
                    </Time>

                    <Total>
                        <small>TOTAL</small>
                        <div>
                            <span>R$ {`${listing?.price} x 
                                ${
                                    (Math.abs(Number(new Date(listing.endDate)) -
                                        Number(new Date(listing.startDate))) /
                                            (1000 * 3600 * 24)).toFixed(0)
                                }`} diárias
                            </span>
                            <span>R$ {
                                listing.price *
                                    (Number((Math.abs(Number(new Date(listing.endDate)) -
                                        Number(new Date(listing.startDate))) / 
                                            (1000 * 3600 * 24)).toFixed(0)))
                            }, 00</span>
                            <Button onClick={() => handleToCreateSchedule(data.user._id, listing._id)}>
                                Alugar Agora
                            </Button>
                        </div>
                    </Total>
                </Content>
            : <p>Nenhum carro selecionado.</p>
            }
        </Container>
    );
}

export default Details;