import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.small};
  img {
    border-radius: ${({theme}) => theme.border.radius};
  }
`;

export const Instruction = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const SentenceInput = styled.textarea`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    font-family: ${theme.font.family};
    width: 32rem;
    height: 9rem;
    border-radius: ${theme.border.radius};
    border: none;
    margin-top: 0.5rem;
    padding: ${({theme}) => theme.spacings.xsmall} ;
    display: block;
    resize: none;
    :focus {
      outline: none;
    }
  `}
`;