import { useState } from 'react'
import styled from 'styled-components'
import AvatarSelector from '../components/AvatarSelector'
import Layout from '../components/Layout'

export default function Home() {
  const [avatar, setAvatar] = useState<string>("https://images.vexels.com/media/users/3/134485/isolated/preview/bcde859a8ad3a45cb93aed78d8a63686-emoticon-legal-emoji.png");

  return (
    <Layout>
      <AvatarSelector 
        avatar={avatar}
        onSelect={(newAvatar) => setAvatar(newAvatar)}
      />
    </Layout>
  )
}
