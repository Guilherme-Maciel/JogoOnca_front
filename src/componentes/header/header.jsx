import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../axios/userContext'; // Importa o hook do contexto
import './header.css';
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import soundOffIcon from './images/icon-sound-off2.png';
import backgroundMusic from './sons/ambiente2.wav';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [isSoundOn, setIsSoundOn] = useState(() => {
    // Recupera o estado do som do localStorage ao carregar
    const savedState = localStorage.getItem('isSoundOn');
    return savedState ? JSON.parse(savedState) : true; // Padrão: som ligado
  });

  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Configura loop

    // Reproduz ou pausa com base no estado
    if (isSoundOn) {
      audio.play().catch((err) => console.error("Erro ao reproduzir áudio:", err));
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isSoundOn]);

  const toggleSound = () => {
    const newSoundState = !isSoundOn;
    setIsSoundOn(newSoundState);
    localStorage.setItem('isSoundOn', JSON.stringify(newSoundState)); // Salva o estado no localStorage
  };

  const userLocal = localStorage.getItem('username');
  let cont = 1;
  if (user !== null && cont === 1) {
    console.log(userLocal);
    cont = 2;
  }

  return (
    <header className="menu-cadastro">
      <nav className="menu-options-cadastro">
        {userLocal ? (
          <>
            <Link to="/menuLogado">
              <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
            </Link>
            <Link to="/tutorial">Regras</Link>
            <Link to="/credito">Créditos</Link>
            <Link to="/loja/moedas">Loja</Link>
            <div className="user-info-cadastro" onClick={() => navigate("/conta")}>
              <p>{userLocal}</p>
            </div>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/menu">
              <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
            </Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/login">Login</Link>
            <Link to="/tutorial">Regras</Link>
            <Link to="/credito">Créditos</Link>
          </>
        )}
        <a onClick={toggleSound}>
          <img src={isSoundOn ? soundIcon : soundOffIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
