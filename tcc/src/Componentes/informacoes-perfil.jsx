import styles from '../Paginas/Perfil/perfil.module.css'

function InformacoesPerfil(){
    return(
        <>
            <div className={styles.divPerfil}><p className={styles.pPerfil}>Nome:</p><span className={styles.spanPerfil}></span></div>
            <div className={styles.divPerfil}><p className={styles.pPerfil}>E-mail:</p><span className={styles.spanPerfil}></span></div>
            <div className={styles.divPerfil}><p className={styles.pPerfil}>Matricula:</p><span className={styles.spanPerfil}></span></div>
            <div className={styles.divPerfil}><p className={styles.pPerfil}>Perfil:</p><span className={styles.spanPerfil}></span></div>
        </>
    )
}

export default InformacoesPerfil