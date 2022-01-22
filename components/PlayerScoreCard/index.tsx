import React from 'react';
import { Container, Score, Username } from './styles';
import Image from 'next/image';

interface Props {
  username: string;
  avatar: string;
  score: number;
}

export const PlayerScoreCard: React.FC<Props> = (props) => {
  return (
    <Container> 
      <Image src={props.avatar} width={50} height={50}/>
      <Username>{props.username}</Username>
      <Score>{props.score} pts</Score>
    </Container>
  );
}
