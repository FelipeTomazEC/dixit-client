import React from 'react';
import { LayoutWithHeadingAndCTA } from '../../components/LayoutWithHeadingCTA';
import { Text, Container } from './styles';
import Image from 'next/image';

export const Result: React.FC = () => {
  const handleSeeScores = () => alert('Redirecting to scores...');
  const correctPicture = 'https://i.pinimg.com/564x/d7/8e/42/d78e42c74b5463a164d6f8888c5464b6.jpg';

  return (
    <LayoutWithHeadingAndCTA
      labelCTA='See scores'
      onClickCTA={handleSeeScores}
      heading='Round 1'
    >
      <Container>
        <Text>The correct picture is...</Text>
        <Image src={correctPicture} width={320} height={420} />
      </Container>
    </LayoutWithHeadingAndCTA>
  );
}
