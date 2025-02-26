import styles from '../Paginas/Perfil/perfil.module.css'
import { Link } from 'react-router-dom'

function BotaoHistorico(){
    return(
        <>
            <Link to="/Historico"><button className={styles.botaoHistorico}>Histórico</button></Link>
        </>
    )
}

export default BotaoHistorico