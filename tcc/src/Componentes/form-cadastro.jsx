import BotaoCadastro from "../Componentes/botao-cadastro.jsx"

function FormCadastro(){
    return(
        <>
            <form>
            <input placeholder="Nome"></input>
            <input placeholder="E-mail"></input>
            <input placeholder="Matrícula"></input>
            <input placeholder="Senha"></input>
            <input placeholder="Confirma senha"></input>
            <label>Professor</label><input type="radio" name="permissao" value="Professor"></input>
            <label>Aluno</label><input type="radio" name="permissao" value="Professor"></input>
            <label>Administrador</label><input type="radio" name="permissao" value="Professor"></input>
            <BotaoCadastro></BotaoCadastro>
            </form>
        </>
    )
}

export default FormCadastro