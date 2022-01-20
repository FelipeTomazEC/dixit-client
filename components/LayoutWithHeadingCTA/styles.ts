import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    text-transform: uppercase;
    position: relative;
    line-height: ${theme.spacings.large};
    width: calc(32rem - (${theme.font.sizes.small} + ${theme.spacings.xsmall}));
    margin-bottom: ${theme.spacings.small};
    font-weight: ${theme.font.normal};

    ::before {
      content: ' ';
      position: absolute;
      width: ${theme.spacings.xxsmall};
      height: ${theme.spacings.large};
      background-color: ${theme.colors.secondary};
      left: -${theme.spacings.xsmall};
      border-radius: ${theme.border.radius};
    }
  `}
`;

export const ContainerCTA = styled.div`
  margin-top: auto;
`;
