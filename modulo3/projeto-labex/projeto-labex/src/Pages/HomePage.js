import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToTripsPage, goToLoginPage } from "../routes/coordinator";

const HomePage = () => {
    
  const navigate = useNavigate() 

  return (
    <div>
      <h1> LabeX </h1>
      <button onClick={() => goToTripsPage(navigate)}> Lista de Viagens </button>
      <button onClick={() => goToLoginPage(navigate)}> Área de Login</button>
    </div>
  );
};

export default HomePage;
