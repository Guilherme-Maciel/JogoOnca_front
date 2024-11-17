import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./novasenha.css";

function Novasenha() {
  const [formData, setFormData] = useState({
    novasenha: "",
    confirmenovasenha: "",
  });

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
          <input
            type="password"
            id="novasenha"
            name="novasenha"
            value={formData.novasenha}
            onChange={handleChange}
            required
            aria-label="Digite sua nova senha"
          />

          <label htmlFor="confirmenovasenha">Confirme a Nova Senha</label>
          <input
            type="password"
            id="confirmenovasenha"
            name="confirmenovasenha"
            value={formData.confirmenovasenha}
            onChange={handleChange}
            required
            aria-label="Confirme sua nova senha"
          />
          
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

