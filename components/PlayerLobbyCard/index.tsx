import Image from 'next/image';
import React from 'react';
import { Container, Username } from './styles';

interface Props {
  avatar: string;
  username: string;
}

export const PlayerLobbyCard: React.FC<Props> = (props) => {
  return (
    <Container>
      <Image src={props.avatar} width={50} height={50}/>
      <Username>{props.username}</Username>
    </Container>
  );
}