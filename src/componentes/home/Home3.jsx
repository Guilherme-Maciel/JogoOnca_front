import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './Home.css';
import useAuthConta from '/src/hooks/AuthConta';
import useSomAmbiente from '/src/hooks/SomAmbienteHook';
import useTabuleiro from '/src/hooks/TabuleiroHook';
import Header from '../header/header';

function Home() {
    const navigate = useNavigate();
    const { criarPartida } = useTabuleiro();
    const { user, atualizaUser, signout } = useAuthConta();
    const { toggleMusica, musicaStatus } = useSomAmbiente();

    useEffect(() => {
        if (user?.jogador?.id) atualizaUser(user?.jogador?.id)
        localStorage.removeItem("partidaSession")
    },[])
	
    const logout = () => {
        signout()
        navigate("/login")
    }

    const jogar = async (tipo) => {
        const responsePartida = await criarPartida(tipo.toUpperCase());
        responsePartida ? navigate("/fila") : navigate("/fila") /*: navigate("/menu")*/
    }
    const meta = () => {
        switch (user?.jogador?.nivelatual) {
            case 1:
                return 100;
            case 2:
                return 300;
            case 3:
                return 600;
            case 4:
                return 1000;
            case 5:
                return 'Máx.';
            default:
                return 1;
        }
    }

    return (
    <div className="bg-home">
    <div className="bg-home-container">
      <Header />
        <div className="main">
            <div className="TITULO">
                <h1 className="Texto-Tit">JOGO DA ONÇA</h1>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Home