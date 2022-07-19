import React, { useEffect } from "react";
import { BaseURL } from "../../Constants/BaseURL";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import {
  goToFeedPage,
  goToSignUpAdressPage,
  goToSignUpPage,
} from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Titulo from "../../Components/Titulo";
import Header from "../../Components/Header";
import InputsStyled from "../../Components/InputsStyled";
import ButtonsStyled from "../../Components/ButtonsStyled";
import LoginStyled from "./LoginStyled";

const LoginPage = () => {
  const { form, onChange, clearFields } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const login = () => {
    const url = `${BaseURL}/login`;

    axios
      .post(url, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        clearFields()
        if (response.data.user.hasAddress === false) {
          goToSignUpAdressPage(navigate);
        }
        if (response.data.user.hasAddress === true) {
          goToFeedPage(navigate);
        }
        
      })
      .catch(() => {
        alert('Usuário não encontrado.');
        clearFields();
      });
  };

  return (
    <LoginStyled>
      <Header/>
      <Titulo/>
      <p><b>Entrar</b></p>
      <InputsStyled
        name={"email"}
        type={"email"}
        value={form.email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <InputsStyled
        name={"password"}
        type={"password"}
        value={form.password}
        onChange={onChange}
        placeholder="Senha"
        required
      />
      <ButtonsStyled onClick={() => login()}>Entrar</ButtonsStyled>
      <p onClick={() => goToSignUpPage(navigate)}>
        <b>Não Possui cadastro? Clique aqui.</b>
      </p>
    </LoginStyled>
  );
};

export default LoginPage;
