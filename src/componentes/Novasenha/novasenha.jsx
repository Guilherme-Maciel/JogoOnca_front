import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./novasenha.css";

function Novasenha() {
  const [formData, setFormData] = useState({
    novasenha: "",
    confirmenovasenha: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação: Senha deve ter 6 caracteres ou mais
    if (formData.novasenha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // Validação: Senhas devem coincidir
    if (formData.novasenha !== formData.confirmenovasenha) {
      setError("As senhas não coincidem.");
      return;
    }

    setError("");

    // Simular envio ao backend
    console.log("Senha alterada com sucesso:", formData);

    // Redirecionar para a página de login
    navigate("/login");
  };

  return (
    <div className="Novasenha-container">
      <div className="form-background">
        <form onSubmit={handleSubmit}>
          <h2 className="Novasenha-title">Alterar Senha</h2>

          <label htmlFor="novasenha">Nova Senha</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="novasenha"
              name="novasenha"
              value={formData.novasenha}
              onChange={handleChange}
              required
              placeholder="Mínimo 6 caracteres"
              aria-label="Digite sua nova senha"
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

          <label htmlFor="confirmenovasenha">Confirme a Nova Senha</label>
          <div className="input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmenovasenha"
              name="confirmenovasenha"
              value={formData.confirmenovasenha}
              onChange={handleChange}
              required
              placeholder="Repita a nova senha"
              aria-label="Confirme sua nova senha"
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
          
          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">
            Alterar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Novasenha;


