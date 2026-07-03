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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
              placeholder="Digite seu nome completo"
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
              placeholder="seuemail@exemplo.com"
              aria-label="Digite seu email"
            />

            <label htmlFor="passwordHash">Senha</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="passwordHash"
                name="senha"
                value={passwordHash}
                onChange={(e) => setPasswordHash(e.target.value)}
                required
                minLength={6}
                placeholder="Mínimo 6 caracteres"
                aria-label="Digite sua senha"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <label htmlFor="confirmPassword">Confirmação de Senha</label>
            <div className="input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmacaoSenha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Repita sua senha"
                aria-label="Confirme sua senha"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {erro && <p className="error-message">{erro}</p>}
            {loading && <p className="loading-message">Carregando...</p>}

            <button type="submit" disabled={loading} className="submit-button">
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;

