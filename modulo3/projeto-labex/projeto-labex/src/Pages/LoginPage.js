import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToAdminHomePage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Body = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 78vh;
`;

const Buttons = styled.button`
  display: flex;
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
  margin: 0 auto;
  &:hover {
    background-color: aquamarine;
  }
`;

const InputsStyle = styled.input`
  display: flex;
  flex-direction: column;
`

const LoginPage = () => {
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/login";

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();
    axios
      .post(url, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToAdminHomePage(navigate);
      })
      .catch(() => {
        alert ('Email e/ou senha errados')
        cleanFields();
      });
  };

  const navigate = useNavigate();
  
  useEffect (() => {
    if (localStorage.token !== undefined) {
      console.log(localStorage.token)
      goToAdminHomePage(navigate)
    }
  }, [])
 




  return (
    <div>
      <Header/>
      <Body>
      <h1> Login </h1>
      <form onSubmit={login}>
        <InputsStyle
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
          type={"email"}
        />
        <InputsStyle
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="Password"
          required
          type={"password"}
        />
        <Buttons> Entrar </Buttons>
      </form>
      <div>
      <Buttons onClick={() => goToHomePage(navigate)}> Voltar </Buttons>
      </div>
      </Body>
      
      <Footer/>
    </div>
  );
};

export default LoginPage;
