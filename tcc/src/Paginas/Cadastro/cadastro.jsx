import Cabecalho from '../../Componentes/cabecalho.jsx'
import FormCadastro from '../../Componentes/form-cadastro.jsx'

function Cadastro(){
    return(
        <>
            <div className='containerGlobal'>
                <Cabecalho></Cabecalho>
                <div className='containerPrincipal'>
                    <h1>Cadastre-se</h1>
                    <hr />
                    <FormCadastro></FormCadastro>
                </div>
            </div>
        </>
    )
}

export default Cadastro