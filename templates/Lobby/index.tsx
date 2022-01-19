import React from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PlayerLobbyCard } from '../../components/PlayerLobbyCard';
import { ButtonsContainer, PlayerList, WaitingMessage } from './styles';

export const Lobby: React.FC = () => {
  const getFakeAvatar = () => `https://i.pravatar.cc/50?img=${Math.random()}a`;
  const players = [
    {avatar: getFakeAvatar(), username: 'User1235'},
    {avatar: getFakeAvatar(), username: 'TheWinner'},
    {avatar: getFakeAvatar(), username: 'Jason455'},
    {avatar: getFakeAvatar(), username: 'TheOne'},
  ];
  const handleShareInviteLink = () => alert(`Generating link for this room...`);
  const handleStartGame = () => alert('Starting the match...');

  return (
    <Layout>
      <WaitingMessage>Waiting for the other players...</WaitingMessage>
      <PlayerList>
        {players.map(p => 
          <li key={p.username}>
            <PlayerLobbyCard avatar={p.avatar} username={p.username}/>
          </li>
        )}
      </PlayerList>
      <ButtonsContainer>
        <Button 
          text='Share invite link' 
          onClick={handleShareInviteLink}
          isOutlined
        />
        <Button text='Start' onClick={handleStartGame}/>
      </ButtonsContainer>
    </Layout>
  );
}
