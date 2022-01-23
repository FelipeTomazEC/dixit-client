import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.large};
  margin-top: ${({theme}) => theme.spacings.large};
`;

export const Text = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.huge};
    text-align: center;
  `}
`;
