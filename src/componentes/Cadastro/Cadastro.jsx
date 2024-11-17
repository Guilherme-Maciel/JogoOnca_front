import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import api from "../../axios/config";
import Header from "../header/header";

function Cadastro() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setBirthday("");
    setPasswordHash("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação antes de enviar ao backend
    if (!username || !email || !passwordHash || !confirmPassword) {
      setErro("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (passwordHash !== confirmPassword) {
      setErro("As senhas não coincidem.");
      return;
    }
    if (passwordHash.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setErro("");
    setLoading(true);

    const coins = 20;
    const userData = { username, email, birthday, passwordHash, coins };

    try {
      const response = await api.post("/user", userData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        console.log("Cadastro realizado com sucesso!", userData.username);
        resetForm();
        navigate("/login");
      } else {
        setErro("Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErro("Erro ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-container">
      <Header />
      <div className="form-background-cadastro">
        <div className="div-form">
          <form onSubmit={handleSubmit}>
            <h2 className="cadastro-title">Cadastro</h2>

            <label htmlFor="username">Nome Completo</label>
            <input
              type="text"
              id="username"
              name="nomeCompleto"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={3}
              aria-label="Digite seu nome completo"
            />

            <label htmlFor="birthday">Data de Nascimento</label>
            <input
              type="date"
              id="birthday"
              name="dataNascimento"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              aria-label="Selecione sua data de nascimento"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Digite seu email"
            />

            <label htmlFor="passwordHash">Senha</label>
            <input
              type="password"
              id="passwordHash"
              name="senha"
              value={passwordHash}
              onChange={(e) => setPasswordHash(e.target.value)}
              required
              minLength={6}
              aria-label="Digite sua senha"
            />

            <label htmlFor="confirmPassword">Confirmação de Senha</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmacaoSenha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              aria-label="Confirme sua senha"
            />

            {erro && <p className="error-message">{erro}</p>}
            {loading && <p className="loading-message">Carregando...</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
