import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

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

            display: grid;
            grid-template-columns: repeat(3, 360px);
            width: 100%;
            padding: 4.8rem;
        }

        a {
            text-decoration: none;
        }
    }

    button#item {
        border: none;
        background: none;
        outline: none;

        max-width: 20rem;
    }

`;

export const Form = styled(Unform)`

`

export const Header = styled.header`
    max-width: 100%;
    height: 12rem;
    background-color: #F4F5F6;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 32px;

    h1 {
        color: #1B1B1F;
        margin-bottom: 24px;
    }

    .date {
        display: flex;
        flex-direction: row;
    }

    .ate {
        margin-left: 40px;
    }

    input {
        width: 12.4rem;
        height: 2.1rem;

        font-family: 'Archivo';
        font-weight: 400;
        font-size: 14pt;
        padding-left: 0.8rem;
        border-radius: 0.6rem;
        border: none;
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

export const Search = styled.div`
    margin-top: 2.1rem;
    align-items: center;

    label {
        height: 5.6rem;
    }

    button {
        width: 8.5rem;
        height: 2.4rem;
        background: #DC1637;
        color: #FFF;
        border: none;
        outline: none;
        border-radius: 8px;

        cursor: pointer;
        font: 500 1rem Archivo;

        display: flex;
        align-items: center;
        justify-content: center;

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

export const Item = styled.div`
    width: 20rem;
    height: 12rem;
    cursor: pointer;
    background-color: #EBEBF0;
    border-radius: 4px;
    padding: 0.8rem;
    transition: border 0.2s;
    
    &:hover {
        border: solid 2px  #DC1637;
    }

    .car {
        width: 16rem;
        margin-top: 0.6rem;
    }

    .energy {
        width: 2rem;
    }
`;

export const HeaderCar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleCar = styled.div`
    display: flex;
    flex-direction: column;

    text-align: left;

    span {
        font-family: 'Archivo';
        font-size: 10pt;
        color: #AEAEB3;
    }

    strong {
        font-family: 'Archivo';
        font-size: 1.6rem;
        font-weight: 400;
        color: #000;
    }
`;

export const Price = styled.div`
    display: flex;
    flex-direction: column;

    text-align: left;

    span {

        font-family: 'Archivo';
        font-size: 10pt;
        color: #AEAEB3;  
    }

    strong {
        font-family: 'Archivo';
        font-size: 1.6rem;
        font-weight: 600;
        color: #DC1637;
    }

`;