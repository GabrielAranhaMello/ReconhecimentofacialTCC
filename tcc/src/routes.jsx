import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Paginas/Home/HOME.jsx'
import Login from './Paginas/Login/login.jsx'
import EsqueciMinhaSenha from './Paginas/EsqueciMinhaSenha/esqueciminhasenha.jsx'
import Cadastro from './Paginas/Cadastro/cadastro.jsx'
import Perfil from './Paginas/Perfil/perfil.jsx'
import BotaoHistorico from './Componentes/botao-historico.jsx'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={ <Home></Home> }></Route>
            <Route path="/login" element={ <Login></Login> }></Route>
            <Route path="/Cadastro" element={ <Cadastro></Cadastro> }></Route>
            <Route path="/EsqueciMinhaSenha" element={ <EsqueciMinhaSenha></EsqueciMinhaSenha> }></Route>
            <Route path="/Perfil" element={ <Perfil></Perfil> }></Route>
            <Route path="/Historico" element={ <BotaoHistorico></BotaoHistorico> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes