import React, { useState } from "react";
import { useNavigate } from 'react-router';
import "./Loading.css";
import loadin from "./img/loading_gif.gif"


function Logout() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // chamada para o backend
    console.log(formData);
  };

  return (
    <div class="Loading-container">
      <div className="FormLoading">
      <div className="Loading-title">CARREGANDO...</div>
        <img src={loadin} className="Imgloading" />
      </div>
    </div>

  );

}

export default Logout;
