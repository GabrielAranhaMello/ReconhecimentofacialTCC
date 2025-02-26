import styles from '../Paginas/Home/home.module.css'
import logoIFRJ from '../Imagens/logo-ifrj.png';
import MenuHamburguer from './menu-hamburguer';

function TelaInicial(){
    return(
        <>  
            
            <div className="containerGlobal">
                <MenuHamburguer></MenuHamburguer>

                <div className="containerPrincipal">
                    <div className={styles.containerTextual}>
                        <h1>Apresentação</h1>
                        <hr />
                        <p>Bem vindo ao site de controle de presença virtual. 
                            Esse site será utilizado para o administrador visualizar as presenças  
                            registradas em sala pela máquina de reconhecimento facial. 
                            Esse site foi feito por alunos do IFRJ do campus Niterói.</p>
                    </div>
                    <div className={styles.containerDeImagem}>
                        <img src={logoIFRJ} alt="Logo da IFRJ" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TelaInicial