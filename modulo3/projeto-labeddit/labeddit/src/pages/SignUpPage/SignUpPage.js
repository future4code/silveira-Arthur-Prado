import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import Header from "../../components/Header/Header";
import { Button, Checkbox, TextField } from "@mui/material";
import { goToFeedPage } from "../../routes/coordinator";
import { InputsContainer } from "../LoginPage/styled";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate()
  const [form, onChange] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleOnSubmitSignIn = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/users/signup`;
   
    axios
      .post(url, form)
      .then((response) => {
        localStorage.token = response.data.token;
        goToFeedPage(navigate);
      })
      .catch((error) => {
        alert(error.data);
      });
  };

  return (
    <div>
      <Header />
      <InputsContainer>
        <h1>Olá, boas vindas ao LabEddit!</h1>
        <form onSubmit={handleOnSubmitSignIn}>
          <TextField
            name={"username"}
            value={form.username}
            label={"username"}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            required
          />
          <TextField
            name={"email"}
            label={"email"}
            value={form.email}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            label={"password"}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />

          <p>
            Ao continuar, você concorda com o nosso contrato de usuário e nossa
            política de privacidade
          </p>
          <Checkbox {...label} />
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </form>
      </InputsContainer>
    </div>
  );
};

export default SignUpPage;
