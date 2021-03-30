import React, { useState, useRef, useEffect, useCallback } from 'react';
import DatePicker from "react-datepicker";
import { FormHandles } from '@unform/core';
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

import "react-datepicker/dist/react-datepicker.css";

import NavBar from '../../components/NavBar';
import Select from '../../components/SimpleSelect';

import Lambo from '../../assets/Lambo.png';
import Energia from '../../assets/icons/Energia.svg';

import api from '../../services/api'

interface Listing {
    price?: Number;
    vehicle?: {
        manufacturer?: String,
        model?: String,
        fuel?: String,
        transmition?: String,
    };
    startDate?: Date;
    endDate?: Date;
}

const Home: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const [listings, setListings] = useState<Listing[]>([])
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    useEffect(() => {
        async function loadListing() {
            await api.get('getListings').then(response => {
                setListings(response.data)
            })
        }
        loadListing()
    })

    // useEffect(() => {
    //     async function loadListingOnRange() {
    //       await api.get<Listing[]>('getListingsOnRequestedRange', {
    //         params: {
    //           startDate: startDate,
    //           endDate: endDate,
    //         },
    //       }).then(response => {
    //         setListings(response.data)
    //       });
    //     }
    
    //     loadListingOnRange();
    // }, [startDate, endDate]);

    console.log(listings)

    // const handleSubmit = useCallback(
    //     async (data: Listing) => {
    //       try {
    //         formRef.current?.setErrors({});

    //         await api.get('/getListingsOnRequestedRange', {
    //             params: {
    //                 data
    //             },
    //         })
    //       } catch (error) {
    //         console.log(error)
    //       }
    //     },
    //     [],
    // );

    return (
        <Container>
        <NavBar/>
        <Header>
            <h1>Escolha uma data e encontre os carros disponíveis</h1>

            <div className="date">
                <div className="de">
                    <p>DE</p>
                    <DatePicker
                        selected={startDate}
                        onChange={value => setStartDate(startDate)}
                    />
                </div>

                <div className="ate">
                    <p>ATÉ</p>
                    <DatePicker
                        selected={endDate}
                        onChange={value => setEndDate(endDate)}
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
                                <span>{listing.vehicle?.manufacturer}</span>
                                <strong>{listing.vehicle?.model}</strong>
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