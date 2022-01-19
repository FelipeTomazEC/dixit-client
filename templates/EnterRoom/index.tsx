import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { TextInput } from '../../components/TextInput';
import { Container } from './styles';
import { useRouter } from 'next/router';

export const EnterRoom: React.FC = () => {
  const [roomCode, setRoomCode] = useState<string>('');
  const router = useRouter();

  const handleEnterClick = () => {
    alert(`Entering room ${roomCode}.`);
    
    setTimeout(() => {
      router.push('/lobby');
    }, 3000);
  }

  return (
    <Layout>
      <Container>
        <TextInput
          label='Enter room code'
          onChange={(value) => setRoomCode(value)}
        />
        <Button 
          text='Enter' 
          onClick={handleEnterClick} 
          isDisable={!roomCode.length}
        />
      </Container>
    </Layout>
  );
}