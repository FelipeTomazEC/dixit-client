import React from 'react';
import { Button } from '../Button';
import { Layout } from '../Layout';

import { Heading, ContainerCTA } from './styles';

interface Props {
  onClickCTA: () => void;
  labelCTA: string;
  heading: string;
}

export const LayoutWithHeadingAndCTA: React.FC<Props> = (props) => {
  return (
    <Layout>
      <header>
        <Heading>{props.heading}</Heading>
      </header>
      {props.children}
      <ContainerCTA>
        <Button onClick={props.onClickCTA} text={props.labelCTA}></Button>
      </ContainerCTA>
    </Layout>
  );
}
