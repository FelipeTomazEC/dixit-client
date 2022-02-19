import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PlayerLobbyCard } from '../../components/PlayerLobbyCard';
import { SharePopup } from '../../components/SharePopup';
import { useMatch } from '../../providers/match-context';
import { ButtonsContainer, PlayerList, WaitingMessage } from './styles';

export const Lobby: React.FC = () => {
  const router = useRouter();
  const { players, matchCode } = useMatch();
  const [isSharePopupVisible, setIsSharePopupVisible] = useState<boolean>(false);
  const handleShareInviteLink = () => setIsSharePopupVisible(true);
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
      <SharePopup
        link={`${process.env.DOMAIN}/enter-room?match_code=${matchCode}`}
        isVisible={isSharePopupVisible} 
        clickOnClose={() => setIsSharePopupVisible(false)}/>
    </Layout>
  );
}
