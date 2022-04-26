import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => goBack(navigate)}></button>
      <button> Entrar </button>
    </div>
  );
};

export default LoginPage;
