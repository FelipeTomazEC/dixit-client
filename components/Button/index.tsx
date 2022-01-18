import React from 'react';
import { Container } from './styles';

interface Props {
  text: string;
  onClick: () => void;
  isOutlined?: boolean;
  isDisable?: boolean;
}

export const Button: React.FC<Props> = ({isOutlined = false, isDisable = false, ...props}) => {
  return (
    <Container 
      onClick={props.onClick} 
      isOutlined={isOutlined} 
      disabled={isDisable}
    >
      {props.text}
    </Container>
  );
}
