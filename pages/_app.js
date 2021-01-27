import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
`;

const { theme } = preset;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My hero quiz</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
