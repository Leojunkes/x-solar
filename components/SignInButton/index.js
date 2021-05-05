import styles from './styles.module.css';

import { signIn,signOut, useSession } from 'next-auth/client';

export function SignInButton() {
  const [session] = useSession();
  

  return session ? (
    <button onClick={()=>signOut()} type="button" classname={styles.signinButton}>
      {session.user.name}
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      type="button"
      classname={styles.signinButton}
    >
      Sign in whit Github
    </button>
  );
}
