import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login2.css"; 
import api from "../../axios/config";
import { useUser } from "../../axios/userContext";

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        localStorage.setItem("username", loggedInUser.username);
        localStorage.setItem("coins", loggedInUser.coins);
        localStorage.setItem("email", loggedInUser.email);
        localStorage.setItem("passwordHash", loggedInUser.passwordHash);

        // Redirecionar para o menu após login
        navigate("/menu");
        setEmail("");
        setPasswordHash("");
      }
    } catch (err) {
      setError("Credenciais inválidas");
    }
  };

  return (
    <div className="Login-container">
            <div className='w-fit rounded-3xl
                bg-white/55 backdrop-blur-md
                border border-white/30
                shadow-2xl
                flex flex-col justify-center items-center m-0'>
                          <form onSubmit={handleSubmit} className="pt-10 pb-10 p-20 flex flex-col justify-center items-center">
          <div className="Login-title">Login</div>

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
              placeholder="Digite sua senha"
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

          {error && <p className="error-message">{error}</p>}

          <div className="forgot-password hidden">
            <label>
              <a href="/novasenha">Esqueceu a senha?</a>
            </label>
          </div>

          <button type="submit" className="submit-button flex justify-center items-center">
            Jogar
          </button>
        </form>
        </div>
      </div>
  );
}

export default Login;

