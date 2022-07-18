import React, { useEffect } from "react";
import { BaseURL } from "../../Constants/BaseURL";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { goToFeedPage, goToSignUpAdressPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

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
        clearFields();
      })
      .catch((error) => {
        alert(error.data);
      });
  };
  
  
  return (
    <div>
      <h2>Login</h2>
      <input
        name={"email"}
        type={"email"}
        value={form.email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        name={"password"}
        type={"password"}
        value={form.password}
        onChange={onChange}
        placeholder="Senha"
        required
      />
      <button onClick={() => login()}>Entrar</button>
    </div>
  );
};

export default LoginPage;
