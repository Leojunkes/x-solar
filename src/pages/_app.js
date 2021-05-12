import './styles/globals.css';
import Header from '../../layouts/Header';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { AuthProvider } from '../providers/auth';

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
