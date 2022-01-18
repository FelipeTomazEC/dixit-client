import React from 'react'

import { Container } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container> 
      {children}
    </Container>
  );
}