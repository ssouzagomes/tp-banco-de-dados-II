import styled from 'styled-components';

export const ContentContainer = styled.div`
  height: 100vh;
  background: #1B1B1F;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  img {
    margin-bottom: 32px;
  }

  h1 {
    font-size: 56px;
    text-align: center;

    margin-bottom: 32px;
  }

  h3 {
    margin-bottom: 48px;
  }
`;

