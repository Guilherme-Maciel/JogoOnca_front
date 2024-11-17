import React from "react";
import { useNavigate } from 'react-router';
import "./Logout.css";
import { useUser } from "../../axios/userContext";

function Logout() {
  const userLocal = localStorage.getItem('email');
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setUser(null);
    localStorage.clear();
    navigate("/menu");
  };

  return (
    <div className="Logout-container">
      <div className="form-background">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="Logout-title">
              <h1>Deseja mesmo encerrar sessão?</h1>
            </div>
            {userLocal && (
              <div className="button-container">
                <button className="button1" onClick={() => navigate('/menu')}>Sim</button>
                <button className="button2" onClick={() => navigate('/menuLogado')}>Não</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Logout;
