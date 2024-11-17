import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import './Conta.css';
import Header from "../header/header";
import api from "../../axios/config";
import profilePic from '../conta/images/pic.png';

<img
    src={profilePic}
    className="main-profile-pic"
    alt="Foto de Perfil"
/>


function Conta() {

    const navigate = useNavigate();

    const userLocalName = localStorage.getItem('username');
    const userLocalEmail = localStorage.getItem('email');
    const userLocalPassword = localStorage.getItem('passwordHash');
    const [username, setUserName] = useState(userLocalName || "");
    const [passwordHash, setPasswordHash] = useState(userLocalPassword || "");
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleChange = async e => {
        e.preventDefault();

        if (passwordHash.length < 6) {
            setErrorMessage("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        try {
            const response = await api.put('/user', {
                email: userLocalEmail,
                username,
                passwordHash,
            });

            if (response.status === 200) {
                if (passwordHash) localStorage.setItem('passwordHash', passwordHash);
                if (username) localStorage.setItem('username', username);
                setErrorMessage("");
            }
        } catch (err) {
            console.log('Erro ao atualizar', err);
            setErrorMessage("Não foi possível atualizar os dados.");
        }
    };

    return (
        <section className="bg-conta">
            <div className="bg-conta-container">
                <div className="menu-superior-conta">
                    <Header />
                </div>
                <div className="content-main-conta">
                    <div className="content-main-superior-conta">
                        <form className="infos-user-conta" onSubmit={handleChange}>


                        <div className="info-conta info-foto-conta">   
                            {/* Imagem principal grande */}
                            <div className="main-profile-pic-container">
                            <img
                                src={profilePic}
                                className="main-profile-pic"
                                alt="Foto de Perfil"
                            />
                            </div>
                        </div>

                            <div className="info-conta info-nome-conta">
                                <label htmlFor="userName">Nome: </label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="info-conta info-senha-conta">
                                <label htmlFor="passwordHash">Senha: </label>
                                <input
                                    type="password"
                                    id="passwordHash"
                                    name="passwordHash"
                                    minLength="6"
                                    value={passwordHash}
                                    onChange={(e) => setPasswordHash(e.target.value)}
                                />
                            </div>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            <button className="btn-atualiza" type="submit">Alterar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Conta;
