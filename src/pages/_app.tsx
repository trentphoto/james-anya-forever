import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
