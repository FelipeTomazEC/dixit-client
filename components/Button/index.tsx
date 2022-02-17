import React from 'react';
import { Container } from './styles';

export enum ButtonSize {
  SMALL,
  REGULAR
}

interface Props {
  text: string;
  onClick: () => void;
  isOutlined?: boolean;
  isDisable?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<Props> = ({
  isOutlined = false, 
  isDisable = false,
  size = ButtonSize.REGULAR,
  ...props
}) => {
  return (
    <Container 
      onClick={props.onClick} 
      isOutlined={isOutlined} 
      disabled={isDisable}
      size={size}
    >
      {props.text}
    </Container>
  );
}
