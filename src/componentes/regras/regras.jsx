import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import "./regras.css";
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';


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
  <>
          <div className="    flex
    h-fit
    flex-col
    items-center
    justify-center
    overflow-hidden
    bg-[url('/assets/imagens/backgrounds/fundo.jpg')]
    bg-cover
    bg-center
    p-10
    bg-no-repeat">
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
      </header> 
      
      .form-background-loja {
    height: 100%;
    width: 100%;
    background-image: url(/assets/imagens/backgrounds/fundo-forms9.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 30% 30%;
      */}
            <div className='w-full max-w-5xl rounded-3xl
                bg-white/55 backdrop-blur-md
                border border-white/30
                shadow-2xl
                flex flex-col justify-center items-center p-10'>
              <div className="ti">Regras</div>
              <div className='tex'>
                <p className="texto mb-5">
                      <br></br>Tabuleiro: O tabuleiro é composto por um conjunto de linhas cruzadas 
                      com 24 interseções ao todo. A 
                      "onça" começa posicionada no ponto central do tabuleiro.
                  </p>
                  <p className="texto  mb-5">
                      Peças principais: Peça da onça e 14 peças de 
                      cachorro.
                  </p>
                  <p className="texto mb-5">
                      Objetivo: A onça deve capturar 5 cachorros para vencer. Enquanto os cachorros devem encurralar a onça, de modo que ela não consiga mais 
                      se mover.
                  </p>
                  <p className="texto mb-5">
                      Captura: A onça captura um cachorro ao pular sobre ele, mas só pode 
                      fazer isso se houver uma casa vazia imediatamente após a peça do 
                      cachorro. Pode haver capturas em sequência.
                  </p>
                  <p className="texto mb-5">
                      Enceramento do jogo: O jogo termina qunado a onça captura 5 
                      cachorros (vitória da onça) ou quando os cachorros conseguem 
                      encurralar a onça, impedindo seus movimentos (vitória dos cachorros).
                  </p>
                  <p className="texto mb-5">
                      Armadilhas: O jogador que controla os cachorros pode posicionar armadilhas estrategicamente em casas vazias do tabuleiro
                      que não são visíveis pela onça, caso a onça pise em uma armadilha, ela ficará 3 rodadas sem se movimentar.
                  </p>
                  <p className="texto mb-5">
                      Lobo: Caso um cachorro chegue ao final do tabuleiro, ele evolui para uma peça "lobo" que não pode ser capturada pela onça.
                  </p>
                </div>
              <button className='b' type="submit" onClick={() => {navigate("/menu")}}>Fechar</button>
            </div>
        </div>

  </>

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
