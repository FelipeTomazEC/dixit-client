import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { LayoutWithHeadingAndCTA } from '../../components/LayoutWithHeadingCTA';
import { PictureSelector } from '../../components/PictureSelector';

export const ChoosePicture: React.FC = () => {
  const router = useRouter();
  const [selectedPicture, setSelectedPicture] = useState<string>();
  const handleSendPicture = () => {
    alert(`Sending picture ${selectedPicture} to the other players...`);
    router.push('/enter-sentence');
  }

  const pictures = [
    'https://i.pinimg.com/564x/d7/8e/42/d78e42c74b5463a164d6f8888c5464b6.jpg',
    'https://i.pinimg.com/564x/5e/d7/ab/5ed7ab42f59a90fe4bb60356aac5c718.jpg',
    'https://i.pinimg.com/564x/b6/b3/c4/b6b3c4814849665df75cf614ca387126.jpg',
    'https://i.pinimg.com/236x/83/6a/0a/836a0ae6224468e93c3adbfce224cb47.jpg',
    'https://i.pinimg.com/564x/0f/a8/36/0fa836e339ba341c24d9b5e4c225a62e.jpg'
  ];
  
  return (
    <LayoutWithHeadingAndCTA 
      labelCTA='Choose picture'
      onClickCTA={handleSendPicture}
      heading='Round 1'
    >
      <PictureSelector pictures={pictures} onSelect={(img) => setSelectedPicture(img)}/>
    </LayoutWithHeadingAndCTA>
  );
}
