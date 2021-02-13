import styled from 'styled-components';

export const Container = styled.div`
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

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-family: 'Archivo';
        font-size: 8pt;
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

    span {

        font-family: 'Archivo';
        font-size: 8pt;
        color: #AEAEB3;  
    }

    strong {
        font-family: 'Archivo';
        font-size: 1.6rem;
        font-weight: 600;
        color: #DC1637;
    }

`;