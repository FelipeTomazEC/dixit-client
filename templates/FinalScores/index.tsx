import { useRouter } from 'next/router';
import React from 'react';
import { LayoutWithHeadingAndCTA } from '../../components/LayoutWithHeadingCTA';
import { Podium } from '../../components/Podium';

import { Container, Text } from './styles';

export const FinalScores: React.FC = () => {
  const router = useRouter();
  const getFakeAvatar = () => `https://i.pravatar.cc/200?img=${Math.random()}a`;
  const [first, second, third] = [
    {avatar: getFakeAvatar(), username: 'User1235'},
    {avatar: getFakeAvatar(), username: 'TheWinner'},
    {avatar: getFakeAvatar(), username: 'Jason455'},
  ];
  const handlePlayAgain = () => {
    alert('Creating a new match...');
    router.push('/choose-picture');
  };

  return (
    <LayoutWithHeadingAndCTA
      onClickCTA={handlePlayAgain}
      labelCTA='Play again'
      heading='Final'
    >
      <Container>
        <Text>And the great winner is...</Text>
        <Podium first={first} second={second} third={third}/>
      </Container>
    </LayoutWithHeadingAndCTA>
  );
}

export default FinalScores;