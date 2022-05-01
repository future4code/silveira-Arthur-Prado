import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToLoginPage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import axios from "axios";
import Planets from "../planets/Planets";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  height: 72vh;
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

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`



const CreateTripPage = () => {
  const { form, onChange, clearFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token === undefined) {
      goToLoginPage(navigate);
    }
  }, []);

  const createTrip = (event) => {
    event.preventDefault();
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trips";
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    axios
      .post(url, form, axiosConfig)
      .then((response) => {
        console.log(response.data.trip);
        alert("Sua viagem foi criada com sucesso");
        clearFields();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const planetOptions = Planets.map((planet) => {
    return <option key={planet}>{planet}</option>;
  });

  return (
    <div>
      <Header />
      <Body>
        <h1>Criar Viagem</h1>
        <FormStyle onSubmit={createTrip}>
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome do evento"
            required
            type={"name"}
            pattern={"^.{5,}"}
          />
          <select
            name={"planet"}
            value={form.planet}
            onChange={onChange}
            required
          >
            <option value="">Escolha um planeta</option>
            {planetOptions}
          </select>
          <input
            name={"date"}
            value={form.date}
            onChange={onChange}
            placeholder="Data do evento"
            required
            type={"date"}
            min={new Date().toLocaleDateString("en-ca")} //necessário para colocar no formato ano-mes-dia, que o input date precisa
          />
          <input
            name={"description"}
            value={form.description}
            onChange={onChange}
            placeholder="Descrição do evento"
            required
            pattern={"^.{30,}"}
          />
          <input
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            placeholder="Duração do evento em dias"
            required
            type="number"
            min={50}
          />
          <Buttons> Criar </Buttons>
        </FormStyle>

        <Buttons onClick={() => goBack(navigate)}> Voltar </Buttons>
      </Body>
      <Footer />
    </div>
  );
};

export default CreateTripPage;
