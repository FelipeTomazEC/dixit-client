import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 32rem;
`;

export const Username = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
  `}
`;

export const SecondStage = styled.div`
  width: calc(32rem / 3);
  height: 11rem;
  background-color: #797979;
  border-radius: ${({ theme }) => `${theme.border.radius} 0 0 0`};
`;

export const ThirdStage = styled(SecondStage)`
  height: 6rem;
  background-color: #B75C08;
  border-radius: ${({ theme }) => ` 0 ${theme.border.radius} 0 0`};
`;

export const FirstStage = styled(SecondStage)`
  background-color: #D9C50F;
  height: 18rem;
  border-radius: ${({ theme }) => ` ${theme.border.radius} ${theme.border.radius} 0 0`};
`;

const StageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.xsmall};

    img {
      border-radius: 100%;
      border-width: ${theme.spacings.xxxsmall} !important;
      border-style: solid !important;
    }
  `}
`;

export const FirstStageContainer = styled(StageContainer)`
  ${({ theme }) => css`
    img {
      border-color: #D9C50F !important;
    }

    ${Username} {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
    }
  `}
`;

export const SecondStageContainer = styled(StageContainer)`
  img {
      border-color: #797979 !important;
  }
`;

export const ThirdStageContainer = styled(StageContainer)`
  img {
    border-color: #B75C08 !important;
  }
`;
