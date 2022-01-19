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
    padding-left: ${theme.spacings.xsmall};
    img {
      border-radius: 100%;
    }
  `}
`;

export const Username = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    position: absolute;
    border-radius: 100%;
    left: 50%;
    transform: translate(-50%);
  `}
`;
