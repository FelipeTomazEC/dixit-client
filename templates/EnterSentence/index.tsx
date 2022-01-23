import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { LayoutWithHeadingAndCTA } from '../../components/LayoutWithHeadingCTA';
import { Container, Instruction, SentenceInput } from './styles';

export const EnterSentence: React.FC = () => {
  const router = useRouter();
  const selectedImage = 'https://i.pinimg.com/564x/d7/8e/42/d78e42c74b5463a164d6f8888c5464b6.jpg';
  const [sentence, setSentence] = useState<string>('');
  const handleOnChangeSentence = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if(value.length <= 100) {
      setSentence(value);
    }
  }
  const handleSubmit = () => {
    alert(`Submitting you image and sentence to the other players...`);
    router.push('/vote');
  }

  return (
    <LayoutWithHeadingAndCTA heading='Round 1' onClickCTA={handleSubmit} labelCTA='Submit'> 
      <Container>
        <Image src={selectedImage} width={320} height={420} />
        <Instruction>
          Enter a sentence that describes this picture.
          <SentenceInput wrap='hard' value={sentence} onChange={handleOnChangeSentence}/>
        </Instruction>
      </Container>
    </LayoutWithHeadingAndCTA>
  );
}