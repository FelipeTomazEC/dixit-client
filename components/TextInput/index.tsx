import React from 'react';
import { Input, Label } from './styles';

interface Props {
  label: string;
  onChange: (value: string) => void;
  value: string
}

export const TextInput: React.FC<Props> = (props) => {
  return (
      <Label> {props.label}
        <Input 
          onChange={(e) => props.onChange(e.target.value)} 
          spellCheck={false}
          value={props.value}
        />
      </Label>
  );
}