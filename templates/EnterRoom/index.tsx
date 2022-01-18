import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { TextInput } from '../../components/TextInput';
import { Container } from './styles';

export const EnterRoom: React.FC = () => {
  const [roomCode, setRoomCode] = useState<string>('');
  const handleEnterClick = () => alert(`Entering room ${roomCode}.`);

  return (
    <Layout>
      <Container>
        <TextInput
          label='Enter room code'
          onChange={(value) => setRoomCode(value)}
        />
        <Button text='Enter' onClick={handleEnterClick} />
      </Container>
    </Layout>
  );
}