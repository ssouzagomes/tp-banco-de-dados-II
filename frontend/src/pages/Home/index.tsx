import React, { useState, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import { Container, Title, Filter, FormSearch } from './styles';


import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Items from '../../components/Items';

import Select from '../../components/SimpleSelect';

import Arrow from '../../assets/icons/arrow.svg';


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

   


    return (
        <Container>
            <NavBar/>
            <Header/>
            <Title>
                <h1>Resultados</h1>
                <span>4 Carros</span>
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
                <Items/>

            </main>
        </Container>
         
        
    );
}

export default Home;