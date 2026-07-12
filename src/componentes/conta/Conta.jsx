import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import './Conta.css';
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
    const [confirmPasswordHash, setConfirmPasswordHash] = useState(userLocalPassword || "");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = async e => {
        e.preventDefault();

        if (passwordHash.length < 6) {
            setErrorMessage("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (passwordHash !== confirmPasswordHash) {
            setErrorMessage("As senhas informadas não coincidem.");
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
            navigate("/menu")
        } catch (err) {
            console.log('Erro ao atualizar', err);
            setErrorMessage("Não foi possível atualizar os dados.");
        }
    };

    return (
        <section className="bg-conta w-full h-[92dvh] m-0 flex justify-center items-center">
            <div className="bg-conta-container">
                <div className="menu-superior-conta">
                </div>
                <div >
                    <div className='w-fit rounded-3xl
                bg-white/55 backdrop-blur-md
                border border-white/30
                shadow-2xl
                flex flex-col justify-center items-center m-0'>

                        <form className="p-15 pt-10 flex justify-center items-center flex-col w-fit" onSubmit={handleChange}>
                        <h2 className="cadastro-title">Perfil</h2>

                            <div className="flex flex-col justify-center">
                                <label htmlFor="userName" className="m-0">Nome</label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />


                                <label htmlFor="passwordHash">Senha: </label>
                                <input
                                    type="password"
                                    id="passwordHash"
                                    name="passwordHash"
                                    minLength="6"
                                    value={passwordHash}
                                    onChange={(e) => setPasswordHash(e.target.value)}
                                />

                                <label htmlFor="passwordHash">Confirmar Senha: </label>
                                <input
                                    type="password"
                                    id="confirmPasswordHash"
                                    name="confirmPasswordHash"
                                    minLength="6"
                                    value={confirmPasswordHash}
                                    onChange={(e) => setConfirmPasswordHash(e.target.value)}
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
