import React from "react";
import { useNavigate } from 'react-router';
import "./Logout.css";
import { useUser } from "../../axios/userContext";

function Logout() {
  const userLocal = localStorage.getItem('email');
  const { user, setUser, clearUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setUser(null);
    localStorage.clear();
    navigate("/menu");
  };

  const handleLogout = () => {
    clearUser(); 
    navigate('/menu');

  };

  return (
    <div className="Logout-container">
            <div className='w-fit rounded-3xl
                bg-white/55 backdrop-blur-md
                border border-white/30
                shadow-2xl
                flex flex-col justify-center items-center m-0'>           <div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center items-center p-10">
            <div className="Logout-title">
              <h1>Deseja mesmo <br/> encerrar sessão?</h1>
            </div>
            {userLocal && (
              <div className="flex items-center justify-between w-full gap-10">
                <button className="button1" onClick={handleLogout}>Sim</button>
                <button className="button2" onClick={() => navigate('/menu')}>Não</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Logout;
