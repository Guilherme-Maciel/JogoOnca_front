import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import "./regras.css";
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';
import Header from "../header/header";


function Regras() {

  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState(false);  // Estado para controlar o som
  const [audio] = useState(new Audio(backgroundMusic));  // Instância do áudio

  // Efeito para controlar o início/parada da música quando o estado mudar
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  // Alternar o estado do som (ativar/desativar)
  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
  <div className="container">
      {/* <header className="menu-cadastro">                  
        <nav className="menu-options-cadastro">
          <a onClick={() => {navigate("/menu")}}>
            <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
          </a>
          <a onClick={() => {navigate("/login")}}>Login</a>
          <a onClick={() => {navigate("/Cadastro")}}>Cadastrar</a>
          <a onClick={() => {navigate("/credito")}}>Créditos</a>
          <a onClick={() => {navigate("/loja/moedas")}}>Loja</a>
          <a onClick={toggleSound}>
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
          </a>
        </nav>
      </header> */}
      <Header />
        <div className="q">
            <div className='q-c'>
              <div className="ti">Regras</div>
              <div className='tex'>
                <p className="texto">
                      <br></br>Tabuleiro: O tabuleiro é composto por um conjunto de linhas cruzadas 
                      formando ma espécie de estrela ou teia, com 24 interseções ao todo. A 
                      "onça" começa posicionada no ponto central do tabuleiro.
                  </p>
                  <p className="texto">
                      Peças principais: Peça da onça (movida por um jogador) e 14 peças de 
                      cachorro: movidas pelo outro jogador.
                  </p>
                  <p className="texto">
                      Objetivo: A onça deve capturar 5 cachorros para vencer.
                      <br />
                      Os cachorros devem encurralar a onça, de modo que ela não consiga mais 
                      se mover, para vencer.
                  </p>
                  <p className="texto">
                      Captura: A onça captura um cachorro ao pular sobre ele, mas só pode 
                      fazer isso se houver uma casa vazia imediatamente após a peça do 
                      cachorro.
                      <br />
                      Os cachorros não têm a capacidade de capturar a onça. Eles precisam 
                      encurralá-la estrategicamente.
                  </p>
                  <p className="texto">
                      Enceramento do jogo: O jogo termina qunado a onça captura 5 
                      cachorros (vitória da onça) ou quando os cachorros conseguem 
                      encurralar a onça, impedindo seus movimentos (vitória dos cachorros).
                  </p>
                </div>
              <button className='b' type="submit" onClick={() => {navigate("/menu")}}>Fechar</button>
            </div>
        </div>
    </div>
  );
}

export default Regras;


// usando a tela para testar o LogOut

// import React from 'react';
// import { useUser } from "../../axios/userContext"; // Acesso ao contexto
// import { useNavigate } from 'react-router-dom'; // Acesso à navegação
// import Header from '../header/header';

// function Tutorial() {
//   const { user, setUser } = useUser(); // Acessa o estado do usuário e a função setUser
//   const navigate = useNavigate(); // Função para navegação entre telas

//   console.log(user);

//   // Função para fazer logout
//   const handleLogout = () => {
//     // Limpar os dados do usuário no contexto
//     setUser(null);
    
//     // Remover os dados do usuário do localStorage
//     localStorage.removeItem('user');
//     console.log(user);
    
//     // Redirecionar para a tela de login
//     navigate('/tabuleiro'); // Você pode mudar isso dependendo da sua estrutura de rotas
//   };

//   if (!user) {
//     return <p>Você precisa estar logado para acessar o tutorial.</p>;
//   }

//   return (
//     <div>
//       <Header />
//       <h1>Bem-vindo ao tutorial, {user.username}!</h1>
//       <p>Conteúdo do tutorial vai aqui.</p>
      
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Tutorial;
