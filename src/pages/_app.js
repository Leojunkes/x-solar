import './styles/globals.css';
import Header from '../layouts/Header';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
