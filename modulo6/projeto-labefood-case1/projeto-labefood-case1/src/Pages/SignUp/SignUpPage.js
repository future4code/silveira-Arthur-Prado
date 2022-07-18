import React from "react";
import { BaseURL } from "../../Constants/BaseURL";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { goToSignUpAdressPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { form, onChange, clearFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const signUp = () => {
    const url = `${BaseURL}/signUp`;

    axios
      .post(url, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToSignUpAdressPage(navigate);
        clearFields()
      })
      .catch((error) => {
        alert(error.data);
        clearFields()
      });
  };

  return (
    <div>
      <input
        name={"name"}
        value={form.name}
        onChange={onChange}
        placeholder="Nome"
        required
        type={"name"}
      />
      <input
        name={"email"}
        value={form.email}
        onChange={onChange}
        placeholder="E-mail"
        required
        type={"email"}
      />
      <input
        name={"cpf"}
        value={form.cpf}
        onChange={onChange}
        placeholder="CPF"
        required
        type={"cpf"}
      />
      <input
        name={"password"}
        value={form.password}
        onChange={onChange}
        placeholder="Senha"
        required
        type={"password"}
      />
      <button onClick={() => signUp()}>Cadastrar</button>
    </div>
  );
};

export default SignUpPage;
