import styled, { css } from 'styled-components';

interface Props {
  isOutlined: boolean;
}

export const Container = styled.button<Props>`
  ${({theme, isOutlined}) => css`
    color: ${isOutlined ? theme.colors.primary : theme.colors.white};
    background-color: ${isOutlined ? theme.colors.white : theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    border-radius: ${theme.border.radius};
    border: none;
    height: 6rem;
    width: 32rem;

    :disabled {
      color: ${theme.colors.lightGray};
      background-color: ${theme.colors.darkGray};
    }
  `}
`;
