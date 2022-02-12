import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head';
import { theme } from '../styles/theme'
import { MatchProvider } from '../providers/match-context';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MatchProvider>
          <Component {...pageProps} />
        </MatchProvider>
      </ThemeProvider>
    </>
  )
}
