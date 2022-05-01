import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToTripsPage, goToLoginPage } from "../routes/coordinator";
import Header from "../components/Header";
import Footer from "../components/Footer"

const Body = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 78vh;
`;
const Buttons = styled.button`
  background-color: #4caf50;
  border: solid 1px black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    background-color: aquamarine;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <Body>
        <h1> LabeX </h1>
        <div>
          <Buttons onClick={() => goToTripsPage(navigate)}>
            Lista de Viagens
          </Buttons>
          <Buttons onClick={() => goToLoginPage(navigate)}>
            Área de Login
          </Buttons>
        </div>
      </Body>
      <Footer/>
    </div>
  );
};

export default HomePage;
