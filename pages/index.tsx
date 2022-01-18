import { useState } from 'react'
import { AvatarSelector } from '../components/AvatarSelector'
import { Button } from '../components/Button';
import { Layout } from '../components/Layout'
import { TextInput } from '../components/TextInput';

export default function Home() {
  const [avatar, setAvatar] = useState<string>("https://images.vexels.com/media/users/3/134485/isolated/preview/bcde859a8ad3a45cb93aed78d8a63686-emoticon-legal-emoji.png");
  const [username, setUsername] = useState<string>('');
  const handleEnterRoom = () => alert('Entering a room...');
  const handleStartNewGame = () => alert('Starting a new game...');

  return (
    <Layout>
      <AvatarSelector 
        avatar={avatar}
        onSelect={(newAvatar) => setAvatar(newAvatar)}
      />
      <TextInput 
        label='Enter a username' 
        onChange={(value) => setUsername(value)}
      />
      <Button text='Enter a room' onClick={handleEnterRoom} isOutlined/>
      <Button text='Start new game' onClick={handleStartNewGame}/>
    </Layout>
  );
}
