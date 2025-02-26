import styles from './login.module.css'
import Cabecalho from '../../Componentes/cabecalho';
import FormularioLogin from '../../Componentes/formulario-login';
import BotaoLogin from '../../Componentes/botao-login';
import { Link } from 'react-router-dom'

function Login(){
    return(
        <>
            <div className='containerGlobal'>
                <Cabecalho></Cabecalho>
                <div className='containerPrincipal'>
                    <h1>Login</h1>
                    <hr />
                    <div className={styles.formulario}>
                        <FormularioLogin></FormularioLogin>
                        <div className={styles.span}>
                            <div><Link to="/EsqueciMinhaSenha"><span>Esqueceu a senha?</span></Link></div>
                            <div><Link to="/Cadastro"><span>Ainda não tem uma conta? Crie uma já!</span></Link></div>
                        </div>
                    </div>
                    <BotaoLogin></BotaoLogin>
                </div>
            </div>
        </>
    );
}

export default Login