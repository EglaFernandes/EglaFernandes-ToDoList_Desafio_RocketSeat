import styles from "./Info.module.css";

export function Info({itemCount,globalCount}) {
    return(
     <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.created}>
                <strong>Tarefas criadas</strong>
                <span>{itemCount}</span>
            </div>
            <div className={styles.done}>
                <strong>Concluídas</strong>
                <span>{globalCount}</span>
            </div>
        </div>
     </div>
    )
    
}