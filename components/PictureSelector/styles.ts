import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.medium};

  img {
    border-radius: ${({theme}) => theme.border.radius};
  }
`;

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 32rem;
  justify-content: space-around;
`;

export const Option = styled.li<{isSelected: boolean}>`
  ${({theme, isSelected}) => css`
    img {
      filter: ${isSelected ? 'none' : 'grayscale(100%)'};
      border: ${isSelected ? `${theme.colors.primary} .3rem solid` : 'none'}!important;
    }
  `}
`;
