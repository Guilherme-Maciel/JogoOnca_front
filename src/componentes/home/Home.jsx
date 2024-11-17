import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import "./Home.css";
import Header from "../header/header";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="cadastro-container">
      <Header />
      <div className="Formhome1">
        <div className="logo-home">
        </div>
      </div>
    </div>
  );
}

export default Home;