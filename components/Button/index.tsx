import React from 'react';
import { Container } from './styles';

interface Props {
  text: string;
  onClick: () => void;
  isOutlined?: boolean;
}

export const Button: React.FC<Props> = ({isOutlined = false, ...props}) => {
  return (
    <Container onClick={props.onClick} isOutlined={isOutlined}>
      {props.text}
    </Container>
  );
}
