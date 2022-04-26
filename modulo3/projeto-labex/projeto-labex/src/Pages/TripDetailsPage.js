import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

const TripDetailsPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <p>Hello World!</p>
      <button onClick={() => goBack(navigate)}> Voltar </button>
    </div>
  );
};

export default TripDetailsPage;
