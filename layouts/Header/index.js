import styles from './styles.module.css';

export default function Header(){
    return(
        <div className={styles.containerHeader}>
        <label htmlFor=""><big>X-Solar</big></label>
        <a href="/cadastros">
        <label className="opcoes" htmlFor="">Cadastros</label>
        </a>
        
        <label className="opcoes" id="home" htmlFor="">Home</label>
    </div>
    )
    
}
