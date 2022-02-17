import styled, { css } from 'styled-components';
import { ButtonSize } from '.';

interface Props {
  isOutlined: boolean;
  size: ButtonSize;
}

export const Container = styled.button<Props>`
  ${({theme, isOutlined, size}) => css`
    color: ${isOutlined ? theme.colors.primary : theme.colors.white};
    background-color: ${isOutlined ? theme.colors.white : theme.colors.primary};
    font-size: ${size === ButtonSize.REGULAR ? theme.font.sizes.xlarge : theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    border-radius: ${theme.border.radius};
    border: none;
    height: ${size === ButtonSize.REGULAR ? '6rem' : '3.3rem'};
    width: ${size === ButtonSize.REGULAR ? '32rem' : '15rem'};

    :disabled {
      color: ${theme.colors.lightGray};
      background-color: ${theme.colors.darkGray};
    }
  `}
`;
