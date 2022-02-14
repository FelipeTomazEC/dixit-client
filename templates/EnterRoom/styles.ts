import styled from 'styled-components';

export const AvatarContainer = styled.div`
  margin-bottom: ${({theme}) => theme.spacings.huge};
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.xsmall};
`;
