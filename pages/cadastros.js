import styles from './styles/Cad.module.css';
import { useSession } from 'next-auth/client';

export default function Cadastros() {
  const [session] = useSession();
  console.log(session)
  return (
    <div className={styles.containerCadastros}>
      <img src={session.user.image} alt="" />
      <label htmlFor="">{session.user.name}</label>
    </div>
  );
}
