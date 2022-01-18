import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  img {
    border-radius: 100%;
  }
`;

export const ChangeAvatarIcon = styled.button`
  ${({theme}) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    border: none;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    left: 10rem;
  `};
`;