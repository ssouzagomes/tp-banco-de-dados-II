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
        }

        .items {
            display: grid;
            grid-template-columns: repeat(3, 400px);
            width: 100%;
        }
    
    }

    main .card {
        display: flex;
        flex-direction: column;
    }

    main .card .period {
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

