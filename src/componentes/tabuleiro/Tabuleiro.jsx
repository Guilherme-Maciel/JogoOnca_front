import React from "react";
import './Tabuleiro.css';  // Importando o CSS

function Tabuleiro() {
    return (
        <div className="container">
            <iframe frameBorder="0"
            src="https://renatoccz.itch.io/jogo-da-onca" 
            allowFullScreen="" width="100%" height="100%">
                <a href="https://renatoccz.itch.io/jogo-da-onca">
                    Play Jogo da Onça on itch.io
                </a>
            </iframe>
        </div>
    );
}

export default Tabuleiro;


//código de Login usado aqui para testar

// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from 'react-router';
// import api from '../../axios/config';
// import { useUser } from "../../axios/userContext";
// import Header from "../header/header";

// function Tabuleiro() {
//   const navigate = useNavigate();
  
//   const {user, setUser} = useUser();
//   const [email, setEmail] = useState('');
//   const [passwordHash, setPasswordHash] = useState('');
//   const [error, setError] = useState(null);


//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await api.post('/login/enter', { email, passwordHash });
//       if(response.status == 200) {
//         console.log('Login com sucesso');
//         const loggedInUser = response.data;
//         setUser(loggedInUser);
//         console.log(loggedInUser.username);
//         // navigate('/tutorial');
//       }
//     }catch(err) {
//       setError('credenciais inválidas');
//     }
//   };

//   return (

//     <div className="Login-container">
//       <Header />
//       <div className="form-background">
//             <form onSubmit={handleSubmit}>
//               <div className="Login-title">Login</div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label htmlFor="passwordHash">Senha</label>
//         <input
//           type="password"
//           name="senha"
//           value={passwordHash}
//           onChange={(e) => setPasswordHash(e.target.value)}
//         />
//         {error&&<p>{error}</p>}
//         <label><a href="#">Esqueceu a senha?</a></label> 
         
//         <button type="submit">Jogar</button>
//       </form>
//     </div>
//     </div>
//   );

// }

// export default Tabuleiro;




// import React, { useEffect } from 'react';
// import { useAuth } from '../../contexts/AuthContext';

// const Tabuleiro = () => {
//   const { user, login, logout } = useAuth();

//   useEffect(() => {
//     // Recupera dados do localStorage ao carregar a página
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       login(JSON.parse(storedUser));
//     }
//   }, [login]);

//   if (!user) {
//     return <div>Você precisa estar logado para ver o perfil.</div>;
//   }

//   return (
//     <div>
//       <h1>Bem-vindo, {user.username}!</h1>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default Tabuleiro;











// import React, { useEffect, useState } from 'react';
// import Desistir from '../modals/desistir/desistir.jsx';
// import './Tabuleiro.css';
// import CronometroCachorro from './cronometro/CronometroCachorro.jsx';
// import CronometroOnca from './cronometro/CronometroOnca.jsx';
// import LogOutIcon from '/public/assets/imagens/icones/LogOutIcon';
// import VolumeOffIcon from '/public/assets/imagens/icones/VolumeOffIcon';
// import VolumeOnIcon from '/public/assets/imagens/icones/VolumeOnIcon';
// import useSomAmbiente from '/src/hooks/SomAmbienteHook';
// import useTabuleiro from '/src/hooks/TabuleiroHook';

// function Tabuleiro() {
//     const {
//         partida,
//         pecasComidas,
//         movimentarPartida,
//         jogadorAtualCronometro,
//         jogadorSessao,
//         stompClient,
//         websocketRoom,
//     } = useTabuleiro();
//     const [modalDesistirVisiblity, setModalDesistirVisiblity] = useState(false);
    
//     const [tabuleiro, setTabuleiro] = useState([]);
//     const [pecaSelecionada, setPecaSelecionada] = useState({});
//     const { toggleMusica, musicaStatus } = useSomAmbiente();

//     useEffect(() => {
//         if (partida && Object.keys(partida).length > 0) {
//           const novoTabuleiro = criarTabuleiro(partida);
//           setTabuleiro(novoTabuleiro);
//           stompClient.current.subscribe('/topic/game-reaction/' + websocketRoom, function(message) {
//             const numeroReacao = Number(JSON.parse(message.body));
//             somReacao(numeroReacao);
//           });
//         }
//     }, [partida]);

//     useEffect(()=>{
//         setPecaSelecionada({})
//     },[jogadorAtualCronometro])

//     const criarTabuleiro = (partida) => {
//         const tabuleiro = [];
//         const posicoesFixasTri = ["5,0;", "5,4;", "6,1;", "6,3;" ];

//         for (let i = 0; i < 7; i++) {
//           const linha = [];

//           for (let j = 0; j < 5; j++) {
//             const chave = `${i},${j};`;
//             if (posicoesFixasTri.includes(chave)) {
//                 linha.push("tri")
//             } else if (partida.primeirojogador.posicoes.hasOwnProperty(chave)) {
//               linha.push(1);
//             } else if (partida.segundojogador.posicoes.hasOwnProperty(chave)) {
//               linha.push(2);
//             } else {
//               linha.push("");
//             }
//           }
//           tabuleiro.push(linha);
//         }
//         return tabuleiro;
//     };

//     const desistir = async () => {
//         setModalDesistirVisiblity(!modalDesistirVisiblity);
//     }

//     const clicarReacao = (event) => {
//         const numeroReacao = parseInt(event.target.value)
//         stompClient.current.publish({ destination: "/app/game/react/" + websocketRoom, body: JSON.stringify(numeroReacao) });
//         somReacao(numeroReacao)
//     };

//     const somReacao = (numeroReacao) => {
//         const audioLista = {
//             1: '/assets/sons/tabuleiro/rindo.mp3',
//             2: '/assets/sons/tabuleiro/nervoso.mp3',
//             3: '/assets/sons/tabuleiro/surpreso.mp3',
//             4: '/assets/sons/tabuleiro/cachorro.mp3',
//             5: '/assets/sons/tabuleiro/onca.mp3',
//         };

//         if (audioLista[numeroReacao]) {
//             const audio = new Audio(audioLista[numeroReacao]);
//             audio.play();
//         }
//     }
    
//     const handleCellClick = async (x, y, peca) => {
//         if (jogadorSessao === jogadorAtualCronometro && peca === jogadorAtualCronometro && Number.isInteger(peca)) {
//             setPecaSelecionada({ y, x });
//         } else if (peca === "" && pecaSelecionada.y !== undefined) {
//             await movimentarPartida(pecaSelecionada.y, pecaSelecionada.x, y, x, jogadorSessao);
//         }
//     };
    
//         return(
//             <section className="bg-tabuleiro">
//                 {modalDesistirVisiblity && <Desistir alterarVisibilidade={desistir}/>}
//                 <div className="bg-tabuleiro-container" id="tabuleiro-container">
//                     <div className="area-onca-tabuleiro">
//                         <div className="area-onca-container-tabuleiro">
//                             <div className="placar-tabuleiro">
//                                 {Array.from({ length: pecasComidas }).map((_, index) => (
//                                     <div 
//                                         className="placar-onca-tabuleiro peca-comida-tabuleiro" 
//                                         key={index}
//                                         style={{
//                                             backgroundImage: `url(${`/assets/imagens/skins/${partida?.segundojogador?.nomeSkinFavorita}`})`,
//                                         }}
//                                     ></div>
//                                 ))}
//                             </div>
//                             <CronometroOnca ativo={jogadorAtualCronometro === 1 ? true : false}/>
//                             <div className="info-user-tabuleiro jogador-onca-tabuleiro">
//                                 <h1 id="contador-onca-tabuleiro">JOGADOR ONÇA</h1>
//                             </div>
//                             <span class="info-nome-user">{partida?.primeirojogador?.user}</span>
//                         </div>
//                     </div>
//                     <div className="principal-tabuleiro">
//                         <div className="tabuleiro">
//                             <div className="tabuleiro-container">
//                                 <div className="malha-tabuleiro">
//                                     {/* Renderização dinâmica do tabuleiro */}
//                                     {tabuleiro.map((row, y) => (
//                                     <div className="row-tabuleiro" key={y}>
//                                         {row.map((peca, x) => (
//                                         peca === "tri" ? (
//                                             <div className="cell-tri-tabuleiro" data-x={x} data-y={y} key={x}></div>
//                                         ) : peca === '' ? (
//                                             <div className="cell-tabuleiro" data-x={x} data-y={y} key={x}  onClick={() => handleCellClick(x, y, peca)}></div>
//                                         ) :
//                                         (
//                                             <div
//                                                 className={`
//                                                 cell-tabuleiro 
//                                                 peca-${peca === 1 ? 'onca' : 'cachorro'}-tabuleiro
//                                                 ${x === pecaSelecionada?.x && y === pecaSelecionada?.y ? 'peca-selecionada-tabuleiro' : ''}
//                                                 ${peca === jogadorAtualCronometro && !(x === pecaSelecionada?.x && y === pecaSelecionada?.y) ? 'peca-jogador-tabuleiro' : ''} 
//                                                 `}
//                                                 style={{
//                                                     backgroundImage: `url(${`/assets/imagens/skins/${peca === 1 ? partida?.primeirojogador?.nomeSkinFavorita : partida?.segundojogador?.nomeSkinFavorita}`})`,
//                                                 }}
//                                                 data-x={x}
//                                                 data-y={y}
//                                                 key={x}
//                                                 onClick={() => handleCellClick(x, y, peca)}
//                                             ></div>
                                            
//                                         )
//                                         ))}
//                                     </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="reacoes-tabuleiro">
//                             <div className="item-reacao-tabuleiro">
//                                 <button className="btn-emoji-tabuleiro emoji-rindo-tabuleiro" value={1} onClick={clicarReacao}></button>
//                             </div>
//                             <div className="item-reacao-tabuleiro">
//                                 <button className="btn-emoji-tabuleiro emoji-nervoso-tabuleiro" value={2} onClick={clicarReacao}></button>
//                             </div>
//                             <div className="item-reacao-tabuleiro">
//                                 <button className="btn-emoji-tabuleiro emoji-surpreso-tabuleiro" value={3} onClick={clicarReacao}></button>
//                             </div>
//                             <div className="item-reacao-tabuleiro">
//                                 <button className="btn-emoji-tabuleiro emoji-cachorro-tabuleiro" value={4} onClick={clicarReacao}></button>
//                             </div>
//                             <div className="item-reacao-tabuleiro">
//                                 <button className="btn-emoji-tabuleiro emoji-onca-tabuleiro" value={5} onClick={clicarReacao}></button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="area-cachorro-tabuleiro">
//                         <div className="menu-superior-tabuleiro">
//                             <button className="item-config-tabuleiro" onClick={toggleMusica}>
//                                 {musicaStatus ? <VolumeOnIcon /> : <VolumeOffIcon />}
//                             </button>
//                             <button className="item-config-tabuleiro" onClick={desistir}>
//                                 <LogOutIcon />
//                             </button>
//                         </div>
//                         <div className="area-cachorro-container-tabuleiro">
//                         <CronometroCachorro  ativo={jogadorAtualCronometro === 2 ? true : false}/>
//                             <div className="info-user-tabuleiro jogador-cachorro-tabuleiro">
//                                 <h1>JOGADOR CACHORRO</h1>
//                             </div> 
//                             <span class="info-nome-user">{partida?.segundojogador?.user}</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }

// export default Tabuleiro