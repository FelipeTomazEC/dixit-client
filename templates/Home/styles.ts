import styled from 'styled-components';

export const AvatarContainer = styled.div`
  margin-bottom: ${({theme}) => theme.spacings.huge};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.xsmall};
  margin-top: auto;
`;
