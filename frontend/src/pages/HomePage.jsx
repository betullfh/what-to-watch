import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
     
      <div className="content">

        <div className="logo-text">
          <div className="logo-main">What<span className="logo-highlight">2</span></div>
          <div className="logo-sub">Watch</div>
        </div>

     
        <h1 className="welcome-title">Hoşgeldiniz!</h1>
        <p className="welcome-text">
          WhatToWatch ile en sevdiğiniz filmleri keşfedin.
        </p>

       
        <button onClick={() => navigate("/films")} className="explore-button">
          Tüm Filmleri Gör
        </button>
      </div>
    </div>
  );
}

export default HomePage;
