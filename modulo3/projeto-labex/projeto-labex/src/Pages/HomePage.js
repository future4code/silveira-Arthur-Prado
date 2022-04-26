import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToTripsPage } from "../routes/coordinator";
import { goToAdminHomePage } from "../routes/coordinator";

const HomePage = () => {
    
  const navigate = useNavigate() 

  return (
    <div>
      <button onClick={() => goToTripsPage(navigate)}> Lista de Viagens </button>
      <button onClick={() => goToAdminHomePage(navigate)}> Área de Admin</button>
    </div>
  );
};

export default HomePage;
