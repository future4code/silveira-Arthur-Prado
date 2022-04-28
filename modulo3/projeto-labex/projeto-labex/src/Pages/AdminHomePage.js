import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  goBack,
  goToLoginPage,
  goToCreateTripPage,
} from "../routes/coordinator";

const AdminHomePage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };

  useEffect(() => {
    if (localStorage.token === undefined) {
      goToLoginPage(navigate);
    }
  }, []);

  return (
    <div>
      <button onClick={() => goBack(navigate)}> Voltar </button>
      <button onClick={() => goToCreateTripPage(navigate)}>
        {" "}
        Criar Viagem{" "}
      </button>
      <button onClick={() => logout()}> Deslogar </button>
    </div>
  );
};

export default AdminHomePage;
