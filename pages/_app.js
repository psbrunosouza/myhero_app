import { createGlobalStyle, ThemeProvider } from 'styled-components'
import preset from '../config/presetConfig.json';

const GlobalStyle = createGlobalStyle`
  *{
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
  }
`
const theme = preset.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
