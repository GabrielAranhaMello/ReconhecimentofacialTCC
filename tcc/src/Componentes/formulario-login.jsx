import styles from '../Paginas/Login/login.module.css'

function handleSubmit(){
    
}

function verificaLogin(){
    const login = document.getElementById('login-do-usuario')
    const p = document.getElementById('p-login')

    if(login.value != "login"){
        p.classList.remove(styles.login)
        p.classList.add(styles.loginErrado)
    }
    else{
        p.classList.remove(styles.loginErrado)
        p.classList.add(styles.login)
    }
}

function FormularioLogin(){
    return(
        <>
            <form className={styles.formLogin} method="post" onSubmit={handleSubmit}>
            <input onChange={verificaLogin} name="" type="text" placeholder="Nome" id="login-do-usuario"/><label hidden>Login do usuário</label>
            <p className={styles.login} id="p-login">Login não encontrado</p>
            <input type="text" placeholder="Senha"/><label hidden>Senha do usuário</label>
            <p></p>
            </form>
        </>
    );
}

export default FormularioLogin