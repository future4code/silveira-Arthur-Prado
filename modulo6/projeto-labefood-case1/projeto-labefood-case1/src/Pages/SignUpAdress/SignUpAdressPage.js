import axios from "axios";
import React from "react";
import ButtonsStyled from "../../Components/ButtonsStyled";
import Header from "../../Components/Header";
import InputsStyled from "../../Components/InputsStyled";
import { BaseURL } from "../../Constants/BaseURL";
import useForm from "../../Hooks/useForm";
import { goToFeedPage } from "../../Routes/Coordinator";
import {SignUpAdressStyled, TitlePage} from "./SignUpAdressStyled";

const SignUpAdressPage = () => {
  const { form, onChange, clearFields } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const saveAdress = () => {
    const url = `${BaseURL}/address`;
    const headers = {
      auth: localStorage.getItem("token"),
    };

    axios
      .put(url, form, { headers: headers })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToFeedPage()
        clearFields()
      })
      .catch((error) => {
        alert(error.data);
      });
  };

  return (
    <SignUpAdressStyled>
      <Header />
      <TitlePage>
        <b>Meu endereço</b>
      </TitlePage>
      <InputsStyled
        name={"street"}
        type={"street"}
        value={form.street}
        onChange={onChange}
        placeholder="Rua/Av."
        required
      />
      <InputsStyled
        name={"number"}
        type={"number"}
        value={form.number}
        onChange={onChange}
        placeholder="Número"
        required
      />
      <InputsStyled
        name={"complement"}
        type={"complement"}
        value={form.complement}
        onChange={onChange}
        placeholder="Apto./Bloco"
      />
      <InputsStyled
        name={"neighbourhood"}
        type={"neighbourhood"}
        value={form.neighbourhood}
        onChange={onChange}
        placeholder="Bairro"
        required
      />
      <InputsStyled
        name={"city"}
        type={"city"}
        value={form.city}
        onChange={onChange}
        placeholder="Cidade"
        required
      />
      <InputsStyled
        name={"state"}
        type={"state"}
        value={form.state}
        onChange={onChange}
        placeholder="Estado"
        required
      />
      <ButtonsStyled onClick={() => saveAdress()}>Salvar</ButtonsStyled>
    </SignUpAdressStyled>
  );
};

export default SignUpAdressPage;
