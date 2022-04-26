import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { goBack } from "../routes/coordinator";
import { goToApplicationFormPage } from "../routes/coordinator";


const ListTripsPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => goBack(navigate)}> Voltar </button>
      <button onClick={() => goToApplicationFormPage(navigate)}> Inscrever-se </button>
    </div>
  );
};

export default ListTripsPage;
