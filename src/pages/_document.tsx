import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&amp;family=Libre+Baskerville:wght@400&amp;display=swap"
          media="all" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
