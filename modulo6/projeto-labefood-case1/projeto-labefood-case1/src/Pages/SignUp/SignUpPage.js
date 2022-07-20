import React, { useEffect } from "react";
import { BaseURL } from "../../Constants/BaseURL";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { goToSignUpAdressPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Titulo from "../../Components/Titulo";
import InputsStyled from "../../Components/InputsStyled";
import SignUpStyled from "./SignUpStyled";
import ButtonsStyled from "../../Components/ButtonsStyled";
import Header from "../../Components/Header";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { form, onChange, clearFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const signUp = async () => {
    const url = `${BaseURL}/signUp`;

    await axios
      .post(url, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToSignUpAdressPage(navigate);
      })
      .catch((error) => {
        alert(error.data);
        clearFields();
      });
  };

  return (
    <SignUpStyled>
      <Header />
      <Titulo />
      <p>
        <b>Cadastrar</b>
      </p>
      <InputsStyled
        name={"name"}
        value={form.name}
        onChange={onChange}
        placeholder="Nome"
        required
        type={"name"}
      />
      <InputsStyled
        name={"email"}
        value={form.email}
        onChange={onChange}
        placeholder="E-mail"
        required
        type={"email"}
      />
      <InputsStyled
        name={"cpf"}
        value={form.cpf}
        onChange={onChange}
        placeholder="CPF"
        required
        type={"cpf"}
      />
      <InputsStyled
        name={"password"}
        value={form.password}
        onChange={onChange}
        placeholder="Senha"
        required
        type={"password"}
      />
      <ButtonsStyled onClick={() => signUp()}>Criar</ButtonsStyled>
    </SignUpStyled>
  );
};

export default SignUpPage;
