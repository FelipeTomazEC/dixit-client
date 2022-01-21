import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Option, OptionsContainer } from './styles';

interface Props {
  pictures: string[];
  onSelect: (picture: string) => void;
}

export const PictureSelector: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState<string>(props.pictures[0]);

  useEffect(() => {
    props.onSelect(selected);
  }, [selected]);

  return (
    <Container>
      <Image src={selected} height={420} width={320}/>
      <OptionsContainer>
        {props.pictures.map((p) => (
          <Option isSelected={p === selected} onClick={() => setSelected(p)}>
            <Image src={p} width={50} height={65} />
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
}
