import Cabecalho from '../../Componentes/cabecalho'
import InformacoesPerfil from '../../Componentes/informacoes-perfil'
import styles from './perfil.module.css'
import BotaoHistorico from '../../Componentes/botao-historico'

function Perfil(){
    return(
        <>
            <div className='containerGlobal'>
                <Cabecalho></Cabecalho>
                <BotaoHistorico></BotaoHistorico>
                <div className='containerPrincipal'>
                    <div className={styles.divInfo}>
                        <InformacoesPerfil></InformacoesPerfil>
                    </div>
                    <div className={styles.fotoExemplo}>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Perfil