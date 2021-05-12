import styles from './styles/Cad.module.css';
import { useSession } from 'next-auth/client';
import { AuthContext } from '../providers/auth';
import { useContext} from 'react';

export default function Cadastros() {
 
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  const [session] = useSession();

  

  return (
    <div className={styles.containerCadastros}>
      <img src={session.user.image} alt="" />

      <label htmlFor="">{user.name}</label>
      <input type=" " onChange={(e) => setUser({ name: e.target.value })} />
    </div>
  );
}
