import styles from './Contato.module.css';

export function Contatos(props) {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.field}><p><strong>Nome: </strong>{props.nome}</p></div>
                <div className={styles.field}><strong>Endereço:</strong>{props.endereco}</div>
                <div className={styles.field}><p><strong>Telefone: </strong>{props.telefone}</p></div>
            </div>
        </div>
    ); 
}   