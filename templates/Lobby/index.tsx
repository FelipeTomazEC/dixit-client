import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PlayerLobbyCard } from '../../components/PlayerLobbyCard';
import { useMatch } from '../../providers/match-context';
import { ButtonsContainer, PlayerList, WaitingMessage } from './styles';

export const Lobby: React.FC = () => {
  const router = useRouter();
  const { players } = useMatch();
  const handleShareInviteLink = () => alert(`Generating link for this room...`);
  const handleStartGame = () => {
    alert('Starting the match...');
    router.push('/choose-picture');
  };

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
