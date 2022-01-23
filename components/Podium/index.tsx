import React from 'react';
import { PlayerInfo } from '../../interfaces/player-info';
import Image from 'next/image';
import { Container, FirstStage, FirstStageContainer, SecondStage, SecondStageContainer, ThirdStage, ThirdStageContainer, Username } from './styles';

interface Props {
  first: PlayerInfo;
  second: PlayerInfo;
  third: PlayerInfo;
}

export const Podium: React.FC<Props> = (props) => {
  return (
    <Container>
      <SecondStageContainer>
        <Image src={props.second.avatar} width={50} height={50} />
        <Username>{props.second.username}</Username>
        <SecondStage />
      </SecondStageContainer>
      <FirstStageContainer>
        <Image src={props.first.avatar} width={100} height={100} />
        <Username>{props.first.username}</Username>
        <FirstStage />
      </FirstStageContainer>
      <ThirdStageContainer>
        <Image src={props.third.avatar} width={50} height={50} />
        <Username>{props.third.username}</Username>
        <ThirdStage />
      </ThirdStageContainer>
    </Container>
  );
}
