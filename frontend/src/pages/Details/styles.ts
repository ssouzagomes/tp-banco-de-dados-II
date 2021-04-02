import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;

    @media (min-width: 300px) and (max-width: 700px) {
        max-width: 100%;
    }
`;

export const Header = styled.header`
    max-width: 100%;
    height: 2.8rem;
    background-color: #1B1B1F;
`;

export const BackButton = styled.div`
    display: flex;
    padding: 0.6rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Car = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;

    img {
        margin-top: 4.1rem;
        height: 12.4rem;

        @media (min-width: 300px) and (max-width: 700px) { 
            height: 6.2rem;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2.1rem;

    small {
        font-family: 'Archivo';
        font-weight: 400;
        font-size: 0.8rem;
        color: #AEAEB3;
    }

    .name {
        display: flex;
        flex-direction: column;

        span {
            font-family: 'Archivo';
            font-weight: 500;
            font-size: 2.4rem;
            color: #47474D;
        }
    }

    .price {
        display: flex;
        flex-direction: column;

        span {
            font-family: 'Archivo';
            font-weight: 500;
            font-size: 2.4rem;
            color: #DC1637;
        }
    }

    @media (min-width: 300px) and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        .price {
            margin-top: 16px;
        }
    }

`;

export const Settings = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 200px);
    width: 100%;
    padding: 1.2rem;
    justify-content: center;

    div {
        width: 125px;
        height: 120px;
        background-color: #F4F5F6;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 48px;
        }
        
        small {
            font-family: 'Archivo';
            font-weight: 300;
            color: #7A7A80;
            font-size: 10pt;

            margin-top: 16px;
        }

        &:hover {
           background-color: #F1ECEC; 
        }
    }

    @media (min-width: 300px) and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            margin-top: 16px;

        }
    }
`;

export const Time = styled.div`
    display: flex;
    flex-direction: row;

    padding: 1.2rem;

    div {
        display: flex;
        flex-direction: column;
        margin-left: 32px;

        small {
            font-family: 'Archivo';
            font-size: 12pt;
            margin-bottom: 12px;
        }

        span {
            font-family: 'Archivo';
            font-weight: 500;
            font-size: 14pt;
            color: #DC1637;
        }
    }
`;

export const Total = styled.div`
    margin-top: 18px;
    padding: 1.2rem;

    max-width: 100%;
    height: 20vh;

    background-color: rgba(0,0,0,0.1);

    small {
        font-family: 'Archivo';
        font-weight: 400;
        font-size: 14pt;
        color: #47474D;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        span {
            font-family: Archivo;
            font-weight: 500;
            font-size: 16pt;
            align-items: center;
        }

        @media (min-width: 300px) and (max-width: 700px) {
            display: flex;
            flex-direction: column;
        }
    }

    @media (min-width: 300px) and (max-width: 700px) {
        height: 25vh;
    }
`;