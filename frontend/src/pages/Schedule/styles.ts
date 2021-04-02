import styled from 'styled-components';
import { Form as Unform } from '@unform/web';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    main {
        margin: 3.2rem auto;
        width: 90%;

        display: flex;
        flex-direction: row;
    }

    main .items {
        margin-right: 48px;
    }

    main .period {
        width: 20rem;
        height: 2rem;
        font-size: 14px;
        color: #03B252;
        background-color: #DAF3E5;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;

        margin-bottom: 32px;
    }

`;

export const Header = styled.header`
    max-width: 100%;
    height: 12rem;
    background-color: #F4F5F6;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 60px;

    h1 {
        font-size: 'Archivo';
        font-weight: 600;
        font-size: 36pt;
        color: #000;
    }

    span {
        font-weight: 'Archivo';
        font-weight: 400;
        font-size: 18pt;
        color: #3D3D4D;
    }

`;

export const Form = styled(Unform)`
    
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    label {
        height: 5.6rem;
    }

    input {
        width: 14.4rem;
        height: 2.2rem;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        background: #F3F3F3;
        outline: 0;
        border: none;

        font-family: 'Archivo';
        font-weight: 400;
        font-size: 12pt;
        color: rgba(0, 0, 0, 0.5);

        transform: border 0.2s;

        &:focus {
            border: 2px solid #000;
        }

    }

    button {
        width: 3rem;
        height: 2.2rem;
        
        margin-left: 1px;
        background: #F3F3F3;
        cursor: pointer;

        border: none;
        outline: 0;

        transform: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }
        
        img {
           width: 24px;
        }
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