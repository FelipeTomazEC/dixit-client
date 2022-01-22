import React, { lazy, useState } from 'react';
import { LayoutWithHeadingAndCTA } from '../../components/LayoutWithHeadingCTA';
import { PictureSelector } from '../../components/PictureSelector';

import { HintSentence } from './styles';

export const VoteForPicture: React.FC = () => {
  const [selectedPicture, setSelectedPicture] = useState<string>('');
  const handleVoteForPicture = () => alert(`Vote for picture ${selectedPicture} has been computed.`);
  const pictures = [
    'https://i.pinimg.com/564x/d7/8e/42/d78e42c74b5463a164d6f8888c5464b6.jpg',
    'https://i.pinimg.com/564x/5e/d7/ab/5ed7ab42f59a90fe4bb60356aac5c718.jpg',
    'https://i.pinimg.com/564x/b6/b3/c4/b6b3c4814849665df75cf614ca387126.jpg',
    'https://i.pinimg.com/236x/83/6a/0a/836a0ae6224468e93c3adbfce224cb47.jpg',
  ];
  
  return (
    <LayoutWithHeadingAndCTA 
      labelCTA='Vote for this picture' 
      onClickCTA={handleVoteForPicture}
      heading='Round 1'
    >
      <HintSentence>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </HintSentence>
      <PictureSelector pictures={pictures} onSelect={(pic) => setSelectedPicture(pic)}/>
    </LayoutWithHeadingAndCTA>
  );
}
