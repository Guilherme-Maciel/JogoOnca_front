
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import './credito.css';
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';
import Header from "../header/header";


function Credito() {
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

  const navigate = useNavigate();
  return (
    <>
          <Header />
        <div className="    flex
    h-screen
    flex-col
    items-center
    justify-center
    overflow-hidden
    bg-[url('/assets/imagens/backgrounds/fundo.jpg')]
    bg-cover
    bg-center
    bg-no-repeat">
            <div className='w-full max-w-5xl rounded-3xl
                bg-white/55 backdrop-blur-md
                border border-white/30
                shadow-2xl
                flex flex-col items-center p-10 mt-10'>
              <div className="title">Créditos</div>
                <div className='subtitle'>
                  <br></br><p>Este jogo foi realizado como parte do curso de Análise e
                  Desenvolvimento de Tecnologia na FATEC São Paulo.</p>
                </div>
                <div className='texto mt-10 mb-10 gap-5 flex flex-col'>
                  <p>Desenvolvimento Jogo e fucionalidades: Renato Caetité, Guilherme Santos e Isabela Ramos</p>
                  <p>Desenvolvimento site: Julio Cezar Erdei, Sofia de Mello, Tamires Barboza, Rodrigo Marcato, Pedro Henrique e Diogo Souza</p>
                  <p >Arte e Design: Isabela Ramos</p>
                </div>
              <button type="submit" onClick={() => {navigate("/menu")}}>Fechar</button>
            </div>
        </div>
    </>

  );
}

export default Credito;