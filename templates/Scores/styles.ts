import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.xsmall};
  margin-top: ${({theme}) => theme.spacings.small};
`;
