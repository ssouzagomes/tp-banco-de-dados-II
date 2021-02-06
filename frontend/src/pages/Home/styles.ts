import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import { LabelContainer } from '../../components/SimpleSelect/styles';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    > main {
        margin: 3.2rem auto;
        width: 90%;
    }

    @media (min-width: 700px) {
        max-width: 100%;

        main {
            padding: 3.2rem 0;
            margin: 0 auto;
        }
    }

`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 4rem;
    padding-left: 4.8rem;
    padding-right: 4rem;

    h1 {
        font-family: 'Archivo', sans-serif;
        font-weight: 600;
        color: #000;
    }

    span {
        font-family: 'Archivo', sans-serif;
        font-weight: 400;
        font-size: 16pt;
        color: #3D3D4D;
    }
`;

export const Filter = styled.div`
    padding-left: 4.8rem;
    padding-top: 4.2rem;
   

    h2 {
        font-family: 'Archivo', sans-serif;
        font-weight: 500;
        font-size: 14pt;
        color: #000;
    }

    span {
        font-family: 'Archivo', sans-serif;
        font-weight: 400;
        font-size: 8pt;

    }
`;

export const FormSearch = styled(Unform)`
    margin-top: 2.1rem;
    align-items: center;

    label {
        height: 5.6rem;
    }

    button {
        width: 8.5rem;
        height: 2.2rem;
        background: #DC1637;
        color: #FFF;
        border: none;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 500 1rem Archivo;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.6rem;

        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }

    @media (min-width: 700px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
    }

   
`;

/* export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 360px);
    width: 100%;
    padding: 4.8rem;
`; */

