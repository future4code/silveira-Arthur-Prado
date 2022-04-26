import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { goToCreateTripPage } from "../routes/coordinator";

const AdminHomePage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => goBack(navigate)}> Voltar </button>
      <button onClick={() => goToCreateTripPage(navigate)}> Criar Viagem </button>
      <button onClick={""}> Deslogar </button>
    </div>
  );
};

export default AdminHomePage;
