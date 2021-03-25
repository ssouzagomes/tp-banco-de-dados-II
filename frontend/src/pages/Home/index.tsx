import React, { useState, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Link } from 'react-router-dom';

import {
    Container,
    Title,
    Filter,
    FormSearch,
    Header,
    Item,
    HeaderCar,
    TitleCar,
    Price
} from './styles';

import NavBar from '../../components/NavBar';
import Select from '../../components/SimpleSelect';

import Lambo from '../../assets/Lambo.png';
import Energia from '../../assets/icons/Energia.svg';

import api from '../../services/api'

interface Listing {
    price: Number;
    vehicle: {
        manufacturer: String,
        model: String
    };
    startDate: Date;
    endDate: Date;
}

const Home: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const [pricePerDay, setPricePerDay] = useState([
        { value: 'R$ 50 - R$ 100', label: 'R$ 50 - R$ 100' },
        { value: 'R$ 100 - R$ 150', label: 'R$ 100 - R$ 150' },
        { value: 'R$ 150 - R$ 200', label: 'R$ 150 - R$ 200' },
        { value: 'R$ 200 - R$ 250', label: 'R$ 200 - R$ 250' },
        { value: 'Acima de R$ 250', label: 'Acima de R$ 250' },
    ]);

    const [fuel, setFuel] = useState([
        { value: 'Gasolina', label: 'Gasolina' },
        { value: 'Elétrico', label: 'Elétrico' },
        { value: 'Álcool', label: 'Álcool' },
    ]);

    const [transmissionFilter, setTransmissionFilter] = useState([
        { value: 'Automático', label: 'Automático' },
        { value: 'Manual', label: 'Manual' },
    ]);

    const [listings, setListings] = useState<Listing[]>([])

    useEffect(() => {
        async function loadListing() {
            await api.get('getListings').then(response => {
                setListings(response.data)
            })
        }
        loadListing()
    })
    
    console.log(listings[0]?.vehicle.manufacturer)

    return (
        <Container>
        <NavBar/>
        <Header>
            <h1>Escolha uma data e encontre os carros disponíveis</h1>

            <div className="date">
                <div className="de">
                    <p>DE</p>
                    <DayPickerInput
                        dayPickerProps={{
                            month: new Date(Date.now()),
                            showWeekNumbers: true, 
                        }}
                    />
                </div>

                <div className="ate">
                    <p>ATÉ</p>
                    <DayPickerInput
                        dayPickerProps={{
                            month: new Date(Date.now()),
                            showWeekNumbers: true,
                            
                        }}
                    />
                </div>
            </div>
        </Header>

        <Title>
            <h1>Resultados</h1>
            <span>{listings.length} Carros</span>
        </Title>
        <Filter>
            <h2>
                Filtros:
            </h2>
            <span>Limpar todos</span>
            <FormSearch ref={formRef} onSubmit={() => {}}>
                <Select
                    name="pricePerDay"
                    label="Preço ao dia"
                    placeholder="Selecione"
                    options={pricePerDay}
                />

                <Select
                    name="fuel"
                    label="Combustível"
                    placeholder="Selecione"
                    options={fuel}
                />

                <Select
                    name="transmissionfilter"
                    label="Transmissão"
                    placeholder="Selecione"
                    options={transmissionFilter}
                />

                <button type="submit">
                    Confirmar
                </button>

            </FormSearch>
        </Filter>

        <main>
            {listings.map(listing => (
                <Link to="/details">
                    <Item>
                        <HeaderCar>
                            <TitleCar>
                                <span>{listing.vehicle.manufacturer}</span>
                                <strong>{listing.vehicle.model}</strong>
                            </TitleCar>

                            <Price>
                                <span>AO DIA</span>
                                <strong>{listing.price}</strong>
                            </Price>
                        </HeaderCar>

                        <img className="car" alt="Lamborghini" src={Lambo} />
                        <img className="energy" alt="Energy" src={Energia} />
                    </Item>
                </Link>
            ))}
        </main>s
    </Container>
    );
}

export default Home;