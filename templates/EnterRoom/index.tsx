import React, { useEffect, useState } from 'react';
import { AvatarSelector } from '../../components/AvatarSelector';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { TextInput } from '../../components/TextInput';
import { useRouter } from 'next/router';
import { AvatarContainer, ButtonContainer, InputsContainer } from './styles';
import { useMatch } from '../../providers/match-context';

export const EnterRoom: React.FC = () => {
  const [avatar, setAvatar] = useState<string>("https://images.vexels.com/media/users/3/134485/isolated/preview/bcde859a8ad3a45cb93aed78d8a63686-emoticon-legal-emoji.png");
  const [username, setUsername] = useState<string>('');
  const [matchCode, setMatchCode] = useState<string>('');
  const { join } = useMatch();
  const router = useRouter();
  const handleEnter = () => { 
    join({ username, matchCode, avatar})
    .then(() => router.push('/lobby'));
  }

  useEffect(() => {
    if(router.isReady) {
      const code = router.query.match_code ?? '';
      setMatchCode(code as string);
    }
  }, [router.query])

  return (
    <Layout>
      <AvatarContainer>
        <AvatarSelector
          avatar={avatar}
          onSelect={(newAvatar) => setAvatar(newAvatar)}
        />
      </AvatarContainer>
      <InputsContainer>
        <TextInput
          label='Enter a username'
          onChange={(value) => setUsername(value)}
          value={username}
        />
        <TextInput
          label='Room code'
          onChange={(value) => setMatchCode(value)}
          value={matchCode}
        />
      </InputsContainer>
      <ButtonContainer>
        <Button
          text='Enter'
          onClick={handleEnter}
          isDisable={!username.length || !matchCode.length}
        />
      </ButtonContainer>
    </Layout>
  );
}