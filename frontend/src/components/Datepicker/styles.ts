import styled, { css } from 'styled-components';

interface LabelProps {
  isFocused: boolean;
  isFilled: boolean;
}

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  .react-datepicker {
    .react-datepicker__triangle {
      visibility: hidden;
    }
  }

  .react-datepicker-wrapper {
    display: inline;
    border: 0;
  }

  .react-datepicker__input-container {
    border-bottom: 2px solid #818e9b;
    color: #292929;
    width: 100%;
    margin-top: 8px; // Resolve questão do espaçamento

    input {
      color: #292929;
      border: 0;
      &::placeholder {
        color: #292929;
      }

      width: 100%;
    }

    svg {
        margin-right: 14px;
    }

      ${props =>
        props.isFocused &&
        css`
          border-bottom: 2px solid #DC1637;
        `}

      ${props =>
        props.isFilled &&
        css`
          border-bottom: 2px solid red;
        `}
    }
  }
`;

export const Label = styled.label<LabelProps>`
  color: #818e9b;
  ${props =>
    props.isFocused &&
    css`
      color: #DC1637;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: red;
    `}
`;
