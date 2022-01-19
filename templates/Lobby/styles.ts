import styled, { css } from 'styled-components';

export const PlayerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.xsmall};
`;

export const WaitingMessage = styled.h1`
  ${({theme}) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    text-transform: uppercase;
    margin: ${theme.spacings.huge} 0px;
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.xsmall};
  margin-top: auto;
`;

