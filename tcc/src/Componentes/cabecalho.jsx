import LogoIFRJMinimizado from '../Imagens/logo-ifrj-minimizado.jpg'
import { Link } from 'react-router-dom'

function Cabecalho(){
    return(
        <Link to="/"><img src={LogoIFRJMinimizado} alt="Logo IFRJ"/></Link>
    )
}

export default Cabecalho