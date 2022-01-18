import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    width: 32rem;
    height: 5rem;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    font-family: ${theme.font.family};
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    border: none;
    text-align: center;
    margin-top: 0.5rem;

    :focus {
      outline: none;
    }
  `}
`;
