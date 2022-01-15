import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head';

const theme = {
  colors: {
    primary: '#891384',
    secondary: '#372937',
    white: '#EEEEEE',
    black: '#020202',
    darkGray: '#534B53',
    lightGray: '#A09999'
  },

  font: {
    size: {
      small: '0.8rem',
      medium: '1.2rem',
      large: '2.8rem'
    }
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
