import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import Header from "../../components/Header/Header";
import { Button, Checkbox, TextField } from "@mui/material";
import { goToFeedPage } from "../../routes/coordinator";

const SignUpPage = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const handleOnSubmitSignIn = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/users/signup`;
    const body = {
      username: form.name,
      email: form.email,
      password: form.password,
    };
    axios.post(url, body)
    .then((response) => {
        localStorage.token = response.data.token
        goToFeedPage()
        clear()
    })
    .catch((error) => {
        console.log(error.data)
    })
  };

  return (
    <div>
      <Header />
      <h1>Olá, boas vindas ao LabEddit!</h1>
      <form onSubmit={handleOnSubmitSignIn}>
        <TextField
          name={"name"}
          value={form.name}
          label="name"
          onChange={onChange}
        />
        <TextField
          name={"email"}
          label="email"
          value={form.email}
          onChange={onChange}
        />
        <TextField
          name={"password"}
          value={form.password}
          label="password"
          onChange={onChange}
        />

        <p>Ao continuar, você concorda com o nosso contrato de usuário e nossa política de privacidade</p>
        <Checkbox {...label} />
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
