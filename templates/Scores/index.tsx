import React from 'react';
import { LayoutWithHeadingAndCTA } from '../../components/LayoutWithHeadingCTA';
import { PlayerScoreCard } from '../../components/PlayerScoreCard';
import { List } from './styles';

export const Scores: React.FC = () => {
  const handleNextRound = () => alert('Starting new round...');
  const getFakeAvatar = () => `https://i.pravatar.cc/50?img=${Math.random()}a`;
  const players = [
    {avatar: getFakeAvatar(), username: 'User1235', score: 17},
    {avatar: getFakeAvatar(), username: 'TheWinner', score: 14},
    {avatar: getFakeAvatar(), username: 'Jason455', score: 12},
    {avatar: getFakeAvatar(), username: 'TheOne', score: 11},
    {avatar: getFakeAvatar(), username: 'Aaron554', score: 11},
  ];

  return (
    <LayoutWithHeadingAndCTA 
      onClickCTA={handleNextRound} 
      labelCTA='Next round' 
      heading='Scores'
    >
      <List>
        {players.sort((p1, p2) => p2.score - p1.score).map((p) => (
          <li key={p.username}>
            <PlayerScoreCard username={p.username} avatar={p.avatar} score={p.score}/>
          </li>
        ))}
      </List>
    </LayoutWithHeadingAndCTA>
  );
}