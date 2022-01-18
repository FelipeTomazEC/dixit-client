import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Container, ChangeAvatarIcon } from './styles'
import { FaCamera } from 'react-icons/fa'

interface Props {
  avatar: string;
  onSelect: (newAvatar: string) => void;
}

const AvatarSelector: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnClick = () => {
    inputRef.current.click()
  }

  const handleOnSelect = async () => {
    const file = inputRef.current.files[0]
    if(!file) {
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => props.onSelect(reader.result as string)
  }

  return (
    <Container onClick={handleOnClick}>
      <Image src={props.avatar} width={150} height={150}/>
      <ChangeAvatarIcon >
        <FaCamera />
      </ChangeAvatarIcon>
      <input 
        type="file" 
        hidden 
        ref={inputRef}
        onChange={handleOnSelect}
        multiple={false}
        accept='.jpg, .jpeg, .png'
      />
    </Container>
  )
}

export default AvatarSelector;