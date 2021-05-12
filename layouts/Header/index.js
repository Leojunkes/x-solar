import styles from './styles.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.containerHeader}>
      <label htmlFor="">
        <big>X-Solar</big>
      </label>
      <Link htmlFor="" href="/cadastros">
        <label className="opcoes" htmlFor="">
          Cadastros
        </label>
      </Link>
      <Link href="/">
        <label className="opcoes" id="home" htmlFor="">
          Home
        </label>
      </Link>
    </div>
  );
}
