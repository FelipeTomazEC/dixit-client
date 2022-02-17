import React from 'react';
import { Background, CloseButton, Container, CopyLinkContainer, Header, Label, Link, Main, Messenger, SocialMediaButtonsContainer, Telegram, Title, Whatsapp } from './styles';
import { IoIosCloseCircle } from 'react-icons/io'
import { BiLink } from 'react-icons/bi'
import { BsMessenger, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { Button, ButtonSize } from '../Button';

interface Props {
  isVisible: boolean;
  clickOnClose: () => void;
  link: string;
}

export const SharePopup: React.FC<Props> = ({ isVisible, clickOnClose, link }) => {
  const handleCopyToClipboard = () => alert('Copying to clipboard.');

  return isVisible ? (
    <Background> 
      <Container>
        <Header>
          <Title>Share invite link</Title>
          <CloseButton onClick={clickOnClose}>
            <IoIosCloseCircle size={30}/>
          </CloseButton>
        </Header>
        <Main>
          <Label>Share this invite via</Label>
          <SocialMediaButtonsContainer>
            <Whatsapp href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">
              <BsWhatsapp size={30}/>
            </Whatsapp>
            <Messenger>
              <BsMessenger size={30}/>
            </Messenger>
            <Telegram>
              <BsTelegram size={30}/>
            </Telegram>
          </SocialMediaButtonsContainer>
          <Label>Or copy link</Label>
          <CopyLinkContainer>
            <BiLink size={35}/>
            <Link>{link}</Link>
            <Button
              size={ButtonSize.SMALL} 
              text="Copy"
              onClick={handleCopyToClipboard}
            />
          </CopyLinkContainer>
        </Main>
      </Container>
    </Background>
  ) : null;
}