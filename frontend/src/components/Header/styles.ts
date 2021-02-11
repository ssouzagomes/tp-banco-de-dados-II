import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    height: 12rem;
    background-color: #F4F5F6;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 60px;

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
        margin-top: 0.6rem;
    }

    

   
`;

export const Select = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    padding: 4.2rem;


    select {
        background: transparent;
        border: 0 none;
        width: 180px;
        height: 28px;
        border-radius: 8px;
        padding-left: 12px;
        border: none;
        font-size: 10pt;

        font-family: 'Archivo', sans-serif;
        font-weight: 500;
        font-size: 1rem;
    }

    

    select:focus {
        outline: 0;
    }
`;