import styled, { css } from "styled-components";

export const Background = styled.div`
  ${({theme}) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black}99;
    z-index: ${theme.layers.overlay};
  `}
`;

export const Container = styled.div`
  ${({theme}) => css`
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.white};
    width: 100%;
    height: 25rem;
    opacity: 100%;
    z-index: ${theme.layers.modal};
    padding: ${theme.spacings.small};
    border-radius: 3rem 3rem 0 0;
  `}
`;

export const CloseButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: none;
  color: ${({theme}) => theme.colors.secondary};
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: fit-content;
  border-bottom: .2rem solid ${({theme}) => theme.colors.darkGray};
  padding-bottom: ${({theme}) => theme.spacings.xxxsmall};
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.main`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
  `}
`;

export const Label = styled.h2`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const SocialMediaButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SocialMediaButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  border-style: solid;
  border-width: 2px;
`;

export const Whatsapp = styled(SocialMediaButton)`
  border-color: #25D366;
  color: #25D366;
`;

export const Telegram = styled(SocialMediaButton)`
  border-color: #229ED9;
  color: #229ED9;
`;

export const Messenger = styled(SocialMediaButton)`
  border-color: #006AFF;
  color: #006AFF;
`;

export const CopyLinkContainer = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: fit-content;
    padding: ${theme.spacings.xxxsmall};
    border: 0.1rem solid ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacings.xxxsmall};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export const Link = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `}
`;
