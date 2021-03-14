import styled from 'styled-components';

export const Container = styled.header`
    background-color: #1B1B1F;
    height: 3.4rem;
    max-width: 100%;
    padding-left: 2.4rem;
    justify-content: space-between;

    display: flex;

    div {
        display: flex;
        align-items: center;
    }

    img {
        margin-right: 3.2rem;
    }

    img#profile {
        margin-right: 2rem
    }

    div {
        display: flex;
        align-items: center;
        span {
            margin-right: 2rem;
            color: #FFF;
            font-weight: 700;
        }
    }

    button {
        border: none;
        background: none;

        margin-right: 2rem;
        font-size: 18px;
        color: white;

        cursor: pointer;
    }
`;