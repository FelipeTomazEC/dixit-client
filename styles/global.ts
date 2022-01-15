import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    * {
    font-family: 'Montserrat', sans-serif;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`