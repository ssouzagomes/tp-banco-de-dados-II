import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import NavBar from '../../components/NavBar';

import Lambo from '../../assets/Lambo.png'
import Energia from '../../assets/icons/Energia.svg';

import api from '../../services/api'

import {
    Container,
    Header,
    Item,
    HeaderCar,
    TitleCar,
    Price,
} from './styles';
interface Schedule {
    listing: {
        _id: string,
        vehicle: {
          _id: string,
          model: string,
          manufacturer: string,
          acceleration: number,
          fuel: string,
          horsepower: string,
          seats: number,
          top_speed: number,
          transmission: string,
        },
        price: number,
        startDate: Date,
        endDate: Date,
    }
}

const Home: React.FC = () => {
    const [schedules, setSchedules] = useState<Schedule[]>([])

    const [data, setData] = useState(() => {
        const user = localStorage.getItem('@RENTX:loggedUser');
    
        if (user) {
            return { user: JSON.parse(user) };
        }
    
        return {};
    });

    useEffect(() => {
        async function loadSchedules() {
            await api.post('getSchedules', {
                user: data.user._id
            })
            .then(response => {
                setSchedules(response.data)
            })
        }
    
        loadSchedules()
    })

    console.log(schedules)

    return (
        <Container>
            <NavBar/>
            <Header>
                <h1>Agendamentos</h1>
                <span>{schedules.length} carros</span>
            </Header>
            <main>
                {
                    schedules.map(schedule => (
                        <div className="items">
                            <div className="card">
                                <Item>
                                    <HeaderCar>
                                        <TitleCar>
                                            <span>{schedule.listing.vehicle.manufacturer}</span>
                                            <strong>{schedule.listing.vehicle.model}</strong>
                                        </TitleCar>

                                        <Price>
                                            <span>AO DIA</span>
                                            <strong>R$ {schedule.listing.price}</strong>
                                        </Price>
                                    </HeaderCar>

                                    <img className="car" alt={schedule.listing.vehicle.model} src={Lambo} />
                                    <img className="energy" alt="Energy" src={Energia} />
                                </Item>
                                <div className="period">
                                    <p>
                                        PERÍODO {
                                            `${format(new Date(schedule.listing.startDate), 'dd MMM')} - 
                                            ${format(new Date(schedule.listing.endDate), 'dd MMM')}`
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </main>
        </Container>        
    );
}

export default Home;