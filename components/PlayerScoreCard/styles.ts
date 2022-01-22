import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 32rem;
    height: 6rem;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};

    img {
      border-radius: 100%;
    }
  `}
`;

export const Username = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    margin-left: ${theme.spacings.small};
  `}
`;

export const Score = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    margin-left: auto;
  `}
`;
