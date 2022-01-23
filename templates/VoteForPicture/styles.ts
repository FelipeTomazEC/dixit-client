import styled, { css } from 'styled-components';

export const HintSentence = styled.p`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xsmall};
    width: 32rem;
  `}
`;
