import styles from './Header.module.css';
import logo from '../assets/whatsApp.png';

export function Header() {
    return (
       <header className={styles.header}>
        <img src={logo} alt='Logotipo do sistema de contatos'/>
       </header>
    );
}