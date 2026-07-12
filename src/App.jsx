import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Conta from './componentes/conta/Conta.jsx';
import HomeLog from './componentes/homeLog/HomeLog.jsx';
import Login from './componentes/login/Login2.jsx';
import Novasenha from './componentes/Novasenha/novasenha.jsx';
import LojaMoeda from './componentes/loja/moedas/LojaMoeda.jsx';
import LojaSkin from './componentes/loja/skins/LojaSkin.jsx';
import CompraMoedas from './componentes/modals/compras/moedas/compraMoedas.jsx';
import CompraSkins from './componentes/modals/compras/skins/compraSkin.jsx';
import Derrota from './componentes/modals/derrota/derrota.jsx';
import Desistencia from './componentes/modals/derrota/desistencia/desistencia.jsx';
import Desistir from './componentes/modals/desistir/desistir.jsx';
import Erro from './componentes/modals/erro/erro.jsx';
import Fila from './componentes/modals/fila/fila.jsx';
import Sucesso from './componentes/modals/sucesso/sucesso.jsx';
import Tutorial from './componentes/regras/regras.jsx';
import Vitoria from './componentes/modals/vitoria/vitoria.jsx';
import Tabuleiro from './componentes/tabuleiro/Tabuleiro.jsx';
import GlobalProvider from './providers/GlobalProvider.jsx';
import Cadastro from './componentes/Cadastro/Cadastro.jsx';
import useAuthConta from '/src/hooks/AuthConta';
import Credito from './componentes/credito/credito.jsx';
import Logout from './componentes/logout/Logout.jsx';
import Loading from './componentes/Loading/Loading.jsx';
import { UserProvider } from './axios/userContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Header from './componentes/header/header.jsx';
import { ProtectedRoute } from './routes/ProtectedRoute.jsx';

const App = () => {
  const { signed } = useAuthConta();
  return (
    <>
      <AuthProvider>
      <UserProvider>
        <BrowserRouter>
        <GlobalProvider>
          <Header/>

          <Routes>
              <Route path='/' element={signed ? <Navigate to={"/menu"}/> : <Navigate to={"/menu"}/>}/>
              <Route path='/menu' element={<HomeLog />} />
              <Route path='/Loading' element={<Loading />} />
              <Route path='/Logout' element={<Logout />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/novasenha' element={<Novasenha/>} />
              <Route element={<ProtectedRoute/>}>
                <Route path='/conta' element={<Conta />} />
              </Route>
              <Route path='/tabuleiro' element={<Tabuleiro />} />
              <Route path='/fila' element={<Fila />} />
              <Route path='/erro' element={<Erro />} />
              <Route path='/sucesso' element={<Sucesso />} />
              <Route path='/tutorial' element={<Tutorial />} />

              <Route path='/credito' element={<Credito />} />
            </Routes>
          </GlobalProvider>
        </BrowserRouter>
      </UserProvider>
      </AuthProvider>
    </>
  )
}

export default App
