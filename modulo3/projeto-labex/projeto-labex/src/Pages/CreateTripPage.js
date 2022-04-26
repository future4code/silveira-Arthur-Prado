import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

const CreateTripPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => goBack(navigate)}> Voltar </button>
      <button> Criar </button>
    </div>
  );
};

export default CreateTripPage;
