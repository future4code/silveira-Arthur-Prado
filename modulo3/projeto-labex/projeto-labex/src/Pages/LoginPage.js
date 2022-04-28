import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHomePage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import axios from "axios";

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
      <h1> Login </h1>
      <form onSubmit={login}>
        <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
          type={"email"}
        />
        <input
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="Password"
          required
          type={"password"}
        />
        <button> Entrar </button>
      </form>
      <div>
        <button onClick={() => goBack(navigate)}> Voltar </button>
      </div>
    </div>
  );
};

export default LoginPage;
