import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToLoginPage } from "../routes/coordinator";

const TripDetailsPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.token === undefined) {
      goToLoginPage(navigate);
    }
  }, []);

  return (
    <div>
      <p>Hello World!</p>
      <button onClick={() => goBack(navigate)}> Voltar </button>
    </div>
  );
};

export default TripDetailsPage;
