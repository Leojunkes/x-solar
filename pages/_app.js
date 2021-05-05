import './styles/globals.css';
import Header from '../layouts/Header';
import {Provider as NextAuthProvider} from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
