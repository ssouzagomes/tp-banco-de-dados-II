import React, { useState, useRef, useEffect, useCallback } from 'react';
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
        model: String,
    };
    startDate: Date;
    endDate: Date;
}

interface ListingFormData {
    startDate?: Date;
    endDate?: Date;
    priceStart?: Number;
    priceEnd?: Number;
    fuel?: String,
    transmition?: String,
}

const Home: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const [listings, setListings] = useState<Listing[]>([])

    useEffect(() => {
        async function loadListing() {
            await api.get('getListings').then(response => {
                setListings(response.data)
            })
        }
        loadListing()
    })

    const handleSubmit = useCallback(
        async (data: ListingFormData) => {
          try {
            formRef.current?.setErrors({});

            await api.get('/getListingsOnRequestedRange', data.)

          } catch (error) {
            console.log(error)
    
          }
        },
        [],
      );

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
            <FormSearch ref={formRef} onSubmit={handleSubmit}>
                <Select
                    name="price"
                    label="Preço ao dia"
                    placeholder="Selecione"
                    options={[
                        { value: 'R$ 50 - R$ 100', label: 'R$ 50 - R$ 100' },
                        { value: 'R$ 100 - R$ 150', label: 'R$ 100 - R$ 150' },
                        { value: 'R$ 150 - R$ 200', label: 'R$ 150 - R$ 200' },
                        { value: 'R$ 200 - R$ 250', label: 'R$ 200 - R$ 250' },
                        { value: 'Acima de R$ 250', label: 'Acima de R$ 250' },
                    ]}
                />

                <Select
                    name="fuel"
                    label="Combustível"
                    placeholder="Selecione"
                    options={[
                        { value: 'Gasolina', label: 'Gasolina' },
                        { value: 'Elétrico', label: 'Elétrico' },
                        { value: 'Álcool', label: 'Álcool' },
                    ]}
                />

                <Select
                    name="transmission"
                    label="Transmissão"
                    placeholder="Selecione"
                    options={[
                        { value: 'Automático', label: 'Automático' },
                        { value: 'Manual', label: 'Manual' },
                    ]}
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