import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import './LojaMoeda.css';
import ReturnIcon from '/public/assets/imagens/icones/ReturnIcon';
import ModalCompraMoeda from '/src/componentes/modals/compras/moedas/compraMoedas.jsx';
import useAuthConta from '/src/hooks/AuthConta';
import LojaMoedaService from '/src/services/LojaMoedasService';
import gameIcon from './img/icon2.png';
import soundIcon from './img/soundicon.png';
import Header from '../../header/header';
import api from '../../../axios/config';

function LojaMoeda() {
    const navigate = useNavigate()
    const { user } = useAuthConta();

    // const userLocalEmail =localStorage.getItem('email');
    // const [coins, setCoins] = useState(0);

    // useEffect(() => {
    //     const userLocalCoins = localStorage.getItem('coins');
    //     setCoins(userLocalCoins ? parseFloat(userLocalCoins, 10) : 0) 
    // }, []);

    // const saveCoins = async (coins) => {
    //     try {
    //         await api.put('/user', {'email': userLocalEmail, coins});
    //     }catch(error){
    //         console.log('Não foi possivel realizar a compra',error);
    //     }
    // }

    // const handleBuy = async (qtd) => {
    //     const sumCoins = coins + qtd;
    //     setCoins(sumCoins);
    //     localStorage.setItem('coins', sumCoins);
    //     await saveCoins(sumCoins);
    // };
    // return(
    //     <div>
    //         <p>{coins}</p>
    //         <button onClick={()=>handleBuy(100)}>100</button>
    //     </div>
    // )

    const userLocalEmail =localStorage.getItem('email');
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        const userLocalCoins = localStorage.getItem('coins');
        setCoins(userLocalCoins ? parseFloat(userLocalCoins, 10) : 0) 
    }, []);

    const saveCoins = async (coins) => {
        try {
            await api.put('/user', {'email': userLocalEmail, coins});
        }catch(error){
            console.log('Não foi possivel realizar a compra',error);
        }
    }

    const handleBuy = async (qtd) => {
        const sumCoins = coins + qtd;
        setCoins(sumCoins);
        localStorage.setItem('coins', sumCoins);
        await saveCoins(sumCoins);
    };
    
    return(
        <section className="bg-loja-moeda">
            <div className="bg-loja-moeda-container" id="bg-lojaMoeda">
                <Header />
                <div className="form-background-loja">
                    <div className="moedas-atuais-loja-moeda">
                        <div className="item-qtde-loja-moeda moedas-loja-moeda">
                            <div className="icon-loja-moeda icon-moeda-loja-moeda"></div>
                            <div className="info-esmeralda-loja-moeda">
                                <p className="info-p-loja-moeda">
                                    {coins}
                                </p>
                            </div>
                        </div>
                        <div className="loja-title">Loja</div>
                    </div>
                    <div className="loja-loja-moeda">
                        <div className="loja-moeda-loja-moeda">
                            <div className="loja-moeda-item-loja-moeda">
                                <div className="foto-item-loja-moeda moeda-p-loja-moeda">
                                </div>
                                <div className="nome-item-loja-moeda">
                                    <h1>100 MOEDAS</h1>
                                </div>
                                <button className="valor-loja-moeda" onClick={()=>handleBuy(100)}>R$5,00</button>
                            </div>
                            <div className="loja-moeda-item-loja-moeda">
                                <div className="foto-item-loja-moeda moeda-m-loja-moeda">
                                </div>
                                <div className="nome-item-loja-moeda">
                                    <h1>500 MOEDAS</h1>
                                </div>
                                <button className="valor-loja-moeda" onClick={()=>handleBuy(500)}>R$20,00</button>
                            </div>
                            <div className="loja-moeda-item-loja-moeda">
                                <div className="foto-item-loja-moeda moeda-g-loja-moeda">
                                </div>
                                <div className="nome-item-loja-moeda">
                                    <h1>1.000 MOEDAS</h1>
                                </div>
                                <button className="valor-loja-moeda" onClick={()=>handleBuy(1000)}>R$50,00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LojaMoeda



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";
// import './LojaMoeda.css';
// import ReturnIcon from '/public/assets/imagens/icones/ReturnIcon';
// import ModalCompraMoeda from '/src/componentes/modals/compras/moedas/compraMoedas.jsx';
// import useAuthConta from '/src/hooks/AuthConta';
// import LojaMoedaService from '/src/services/LojaMoedasService';
// import gameIcon from './img/icon2.png';
// import soundIcon from './img/soundicon.png';
// import Header from '../../header/header';
// import api from '../../../axios/config';

// function LojaMoeda() {
//     const navigate = useNavigate()
//     const { user } = useAuthConta();

//     const userLocalCoins =localStorage.getItem('coins');
//     const userLocalEmail =localStorage.getItem('email');
//     // const [coins, setCoins] = useState();

//     const handleBuy = async e => {
//         // e.preventDefault();
//         var coins = (e.target.value);
//         coins = parseFloat(coins);
//         var convert = parseFloat(userLocalCoins);
//         console.log(coins)
//         try {
//             console.log(coins)
//           const response = await api.put('/user', {'email': userLocalEmail, coins});
//           if(response.status == 200) {
//             if(coins !== undefined){
//                 //parece q está entendendo como string --------------------
//                 coins = convert + coins;
//                 localStorage.setItem('coins', coins);
//                 window.location.reload();
//             }
//           }
//         }catch(err) {
//           console.log('credenciais inválidas', err);
//         }
//     }
    
//     return(
//         <section className="bg-loja-moeda">
//             <div className="bg-loja-moeda-container" id="bg-lojaMoeda">
//                 <Header />
//                 <div className="form-background-loja">
//                      <div className="moedas-atuais-loja-moeda">
//                          <div className="item-qtde-loja-moeda moedas-loja-moeda">
//                             <div className="icon-loja-moeda icon-moeda-loja-moeda"></div>
                            
//                             <div className="info-esmeralda-loja-moeda">
                                
                                
//                                 <div className="form-background-loja">
//                      <div className="moedas-atuais-loja-moeda">
//                          <div className="item-qtde-loja-moeda moedas-loja-moeda">
//                              <div className="icon-loja-moeda icon-moeda-loja-moeda"></div>
//                              <div className="info-esmeralda-loja-moeda">
//                                  <p className="info-p-loja-moeda">
//                                     {userLocalCoins === undefined | userLocalCoins === null ? (
//                                         <p className="info-p-loja-moeda">0</p>
//                                     ):
//                                     <p className="info-p-loja-moeda">
//                                         {userLocalCoins}
//                                     </p>
//                                     }
//                                 </p>
//                              </div>
//                          </div>
//                          <div className="loja-title">Loja</div>
//                      </div>
//                      <div className="loja-loja-moeda">
//                          <div className="loja-moeda-loja-moeda">
//                              <div className="loja-moeda-item-loja-moeda">
//                                  <div className="foto-item-loja-moeda moeda-p-loja-moeda">
//                                  </div>
//                                  <div className="nome-item-loja-moeda">
//                                      <h1>100 MOEDAS</h1>
//                                  </div>
//                                  <button className="valor-loja-moeda" value={100} onClick={handleBuy}>R$5,00</button>
//                              </div>
//                              <div className="loja-moeda-item-loja-moeda">
//                                  <div className="foto-item-loja-moeda moeda-m-loja-moeda">
//                                  </div>
//                                  <div className="nome-item-loja-moeda">
//                                      <h1>500 MOEDAS</h1>
//                                  </div>
//                                  <button className="valor-loja-moeda" value={500} onClick={handleBuy}>R$20,00</button>
//                              </div>
//                              <div className="loja-moeda-item-loja-moeda">
//                                  <div className="foto-item-loja-moeda moeda-g-loja-moeda">
//                                  </div>
//                                  <div className="nome-item-loja-moeda">
//                                      <h1>1.000 MOEDAS</h1>
//                                  </div>
//                                  <button className="valor-loja-moeda" value={1000} onClick={handleBuy}>R$50,00</button>
//                              </div>
//                          </div>
//                      </div>
                 
                 
//                                 <div className="nome-item-loja-moeda">
//                                     <h1>100 MOEDAS</h1>
//                                 </div>
//                                 <button value={100} onClick={handleBuy}>buy</button>
//                             </div>
// </div></div></div></div>
//                         </div>
//         </section>
//     )
// }

// export default LojaMoeda







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";
// import './LojaMoeda.css';
// import ReturnIcon from '/public/assets/imagens/icones/ReturnIcon';
// import ModalCompraMoeda from '/src/componentes/modals/compras/moedas/compraMoedas.jsx';
// import useAuthConta from '/src/hooks/AuthConta';
// import LojaMoedaService from '/src/services/LojaMoedasService';
// import gameIcon from './img/icon2.png';
// import soundIcon from './img/soundicon.png';
// import Header from '../../header/header';

// function LojaMoeda() {
//     const navigate = useNavigate()
//     const { user } = useAuthConta();

//     const compraMoeda = (event) => {
//         let idMoeda = parseInt(event.target.value)
//         let qtdeMoeda, tipoMoeda;

//         switch (idMoeda) {
//             case 1:
//                 qtdeMoeda = 100;
//                 tipoMoeda = 2;
//                 break;
//             case 2:
//                 qtdeMoeda = 500;
//                 tipoMoeda = 2;
//                 break;
//             case 3:
//                 qtdeMoeda = 1000;
//                 tipoMoeda = 2;
//                 break;
//             case 4:
//                 qtdeMoeda = 100;
//                 tipoMoeda = 1;
//                 break;
//             case 5:
//                 qtdeMoeda = 1000;
//                 tipoMoeda = 1;
//                 break;
//             case 6:
//                 qtdeMoeda = 10000;
//                 tipoMoeda = 1;
//                 break;
//             default:
//                 qtdeMoeda;
//                 tipoMoeda;
//                 break;
//         } 

//         const compraMoedas = async (id, moeda, quantidade) => {
//             try {
//                 const response = await LojaMoedaService.sendCoins(id, moeda, quantidade);
//                 (response && response.status === 200) ? navigate(`/compras/moedas/${idMoeda}`) : toast.error('Erro ao efetuar a compra! Tente novamente em breve');

//             } 
//             catch (error) {
//                 toast.error('Erro ao enviar informações!');
//             }
//         };

//         compraMoedas(user.jogador.id, tipoMoeda, qtdeMoeda);

//     }
    
//     return(
//         <section className="bg-loja-moeda">
//             <div className="bg-loja-moeda-container" id="bg-lojaMoeda">
//                 {/* <header className="menu-loja">                  
//                     <nav className="menu-options-loja">
//                         <a onClick={() => {navigate("/menu")}}>
//                             <img src={gameIcon} alt="Jogo da Onça" className="game-logo-loja" />
//                         </a>
//                         <a onClick={() => {navigate("/tutorial")}}>Regras</a>
//                         <a onClick={() => {navigate("/credito")}}>Créditos</a>
//                         <a onClick={() => {navigate("/Logout")}}>Log Out</a>
//                     </nav>
//                 </header> */}
//                 <Header />
//                 <div className="form-background-loja">
//                     <div className="moedas-atuais-loja-moeda">
//                         <div className="item-qtde-loja-moeda moedas-loja-moeda">
//                             <div className="icon-loja-moeda icon-moeda-loja-moeda"></div>
//                             <div className="info-esmeralda-loja-moeda">
//                                 <p className="info-p-loja-moeda">{user?.jogador?.qntmoedanormal}</p>
//                             </div>
//                         </div>
//                         <div className="loja-title">Loja</div>
//                     </div>
//                     <div className="loja-loja-moeda">
//                         <div className="loja-moeda-loja-moeda">
//                             <div className="loja-moeda-item-loja-moeda">
//                                 <div className="foto-item-loja-moeda moeda-p-loja-moeda">
//                                 </div>
//                                 <div className="nome-item-loja-moeda">
//                                     <h1>100 MOEDAS</h1>
//                                 </div>
//                                 <button className="valor-loja-moeda" value={4} onClick={compraMoeda}>R$5,00</button>
//                             </div>
//                             <div className="loja-moeda-item-loja-moeda">
//                                 <div className="foto-item-loja-moeda moeda-m-loja-moeda">
//                                 </div>
//                                 <div className="nome-item-loja-moeda">
//                                     <h1>1.000 MOEDAS</h1>
//                                 </div>
//                                 <button className="valor-loja-moeda" value={5} onClick={compraMoeda}>R$20,00</button>
//                             </div>
//                             <div className="loja-moeda-item-loja-moeda">
//                                 <div className="foto-item-loja-moeda moeda-g-loja-moeda">
//                                 </div>
//                                 <div className="nome-item-loja-moeda">
//                                     <h1>10.000 MOEDAS</h1>
//                                 </div>
//                                 <button className="valor-loja-moeda" value={6} onClick={compraMoeda}>R$50,00</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default LojaMoeda





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";
// import './LojaMoeda.css';
// import ReturnIcon from '/public/assets/imagens/icones/ReturnIcon';
// import ModalCompraMoeda from '/src/componentes/modals/compras/moedas/compraMoedas.jsx';
// import useAuthConta from '/src/hooks/AuthConta';
// import LojaMoedaService from '/src/services/LojaMoedasService';
// import gameIcon from './img/icon2.png';
// import soundIcon from './img/soundicon.png';
// import Header from '../../header/header';
// import api from '../../../axios/config';

// function LojaMoeda() {
//     const navigate = useNavigate()
//     const { user } = useAuthConta();

//     const userLocalCoins =localStorage.getItem('coins');
//     const userLocalEmail =localStorage.getItem('email');
//     // const [coins, setCoins] = useState();

//     const handleBuy = async e => {
//         // e.preventDefault();
//         var coins = (e.target.value);
//         coins = parseFloat(coins);
//         var convert = parseFloat(userLocalCoins);
//         console.log(coins)
//         try {
//             console.log(coins)
//           const response = await api.put('/user', {'email': userLocalEmail, coins});
//           if(response.status == 200) {
//             if(coins !== undefined){
//                 //parece q está entendendo como string --------------------
//                 coins = convert + coins;
//                 localStorage.setItem('coins', coins);
//                 window.location.reload();
//             }
//           }
//         }catch(err) {
//           console.log('credenciais inválidas', err);
//         }
//     }


// <p className="info-p-loja-moeda">
//                                     {userLocalCoins === undefined | userLocalCoins === null ? (
//                                         <p className="info-p-loja-moeda">0</p>
//                                     ):
//                                     <p className="info-p-loja-moeda">
//                                         {userLocalCoins}
//                                     </p>
//                                     }
//                                 </p>


// <div className="nome-item-loja-moeda">
//                                     <h1>100 MOEDAS</h1>
//                                 </div>
//                                 <button value={100} onClick={handleBuy}>buy</button>