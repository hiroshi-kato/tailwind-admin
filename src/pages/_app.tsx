import { AppProps } from 'next/app';
import { VFC } from 'react';
import 'tailwindcss/tailwind.css';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
