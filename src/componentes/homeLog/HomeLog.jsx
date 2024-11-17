import React, { useState } from "react";
import { useNavigate } from 'react-router';
import "./HomeLog.css";
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import useSomAmbiente from '/src/hooks/SomAmbienteHook';
import Header from "../header/header";

function Home() {

  const navigate = useNavigate();
  const { toggleMusica, musicaStatus } = useSomAmbiente();

  const handleNavigate = () => {
    window.location.href = "https://renatoccz.itch.io/jogo-da-onca";
  }

  return (
    <div className="HomeLog-container">
      {/* <header className="HomeLog-cadastro"> 
        <div className="menu-icon-HomeLog">
          <img src={gameIcon} alt="Jogo da Onça" className="game-logo-HomeLog" />
        </div>
        <nav className="menu-options-HomeLog">
          <a onClick={() => {navigate("/tutorial")}}>Regras</a>
          <a onClick={() => {navigate("/credito")}}>Créditos</a>
          <a onClick={() => {navigate("/loja/skin")}}>Loja</a>
          <a onClick={() => {navigate("/Logout")}}>Log Out</a>
          <a href="#som">
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
          </a>
          </nav>
      </header> */}
      <Header />
      <div className="Formhome">
        <div className="logo-homeLog">
          <div className="buton-jogar">
            <button type="submit" onClick={handleNavigate}>JOGAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;