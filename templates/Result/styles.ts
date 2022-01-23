import styled, { css } from "styled-components";

export const Text = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.huge};
    text-align: center;
  `}
`;

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    width: 32rem;
    
    img {
      border-radius: ${theme.border.radius};
    }
  `}
`;