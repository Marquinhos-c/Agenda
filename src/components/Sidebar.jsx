import styles from './Sidebar.module.css';
import dev from '../assets/marcos.jpg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className= {styles.cover} src={dev}/>
            <div className={styles.profile}>
                <strong>Marcos Costa</strong>
                <span>Full Stack</span>
            </div>
        </aside>
    );
}