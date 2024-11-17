import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login2.css"; 
import api from "../../axios/config";
import { useUser } from "../../axios/userContext";
import Header from "../header/header";

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await api.post("/login/enter", { email, passwordHash });
      if (response.status === 200) {
        console.log("Login com sucesso");
        const loggedInUser = response.data;

        // Salvar usuário no contexto e localStorage
        setUser(loggedInUser);
        localStorage.setItem("username", loggedInUser.username);
        localStorage.setItem("coins", loggedInUser.coins);
        localStorage.setItem("email", loggedInUser.email);
        localStorage.setItem("passwordHash", loggedInUser.passwordHash);

        // Redirecionar para o menu após login
        navigate("/menuLogado");
        setEmail("");
        setPasswordHash("");
      }
    } catch (err) {
      setError("Credenciais inválidas");
    }
  };

  return (
    <div className="Login-container">
      <Header />
      <div className="form-background">
        <form onSubmit={handleSubmit}>
          <div className="Login-title">Login</div>

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
            aria-label="Digite sua senha"
          />

          {error && <p className="error-message">{error}</p>}

          <div className="forgot-password">
            <label>
              <a href="/novasenha">Esqueceu a senha?</a>
            </label>
          </div>

          <button type="submit" className="submit-button">
            Jogar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
