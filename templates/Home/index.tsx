import React, { useEffect, useState } from 'react';
import { AvatarSelector } from '../../components/AvatarSelector';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { TextInput } from '../../components/TextInput';
import { useRouter } from 'next/router';
import { AvatarContainer, ButtonsContainer } from './styles';
import { useMatch } from '../../providers/match-context';

export const Home: React.FC = () => {
  const [avatar, setAvatar] = useState<string>("https://images.vexels.com/media/users/3/134485/isolated/preview/bcde859a8ad3a45cb93aed78d8a63686-emoticon-legal-emoji.png");
  const [username, setUsername] = useState<string>('');
  const { start } = useMatch();
  const router = useRouter();
  const handleEnterRoom = () => router.push('/enter-room');
  const handleStart = () => {
    start({ username, avatar })
    .then(() => router.push('/lobby'));
  }
  
  return (
    <Layout>
      <AvatarContainer>
        <AvatarSelector
          avatar={avatar}
          onSelect={(newAvatar) => setAvatar(newAvatar)}
        />
      </AvatarContainer>
      <TextInput
        label='Enter a username'
        onChange={(value) => setUsername(value)}
      />
      <ButtonsContainer>
        <Button 
          text='Enter a room' 
          onClick={handleEnterRoom} 
          isOutlined
          isDisable = {!username.length}
        />
        <Button 
          text='Start new game' 
          onClick={handleStart}
          isDisable = {!username.length}
        />
      </ButtonsContainer>
    </Layout>
  );
}