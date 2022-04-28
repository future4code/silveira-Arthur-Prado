import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import axios from "axios";
import Countries from "../countries/Countries";

const ApplicationFormPage = () => {
  const { form, onChange, clearFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const [trips, setTrips] = useState([]);
  const [chosenTrip, setChosenTrip] = useState("")

  const urlTrips =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trips";

  const fetchTrips = () => {
    axios
      .get(urlTrips)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const subscribeToTrip = (event) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trips/${chosenTrip}/apply`;
    event.preventDefault();
    axios
      .post(url, form)
      .then(() => {
        alert("Você está inscrito!");
        clearFields()
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const navigate = useNavigate();


  const handleTripChange = (event) => {
    setChosenTrip (event.target.value)
  }

  const countryOptions = Countries.map((country) => {
    return <option key={country.nome}>{country.nome}</option>;
  });

  const tripOptions = trips.map((trip) => {
    return <option value={trip.id} key={trip.id}> {trip.name} </option>;
  });

  return (
    <div>
      <form onSubmit={subscribeToTrip}>
        <select value={chosenTrip} onChange={handleTripChange} required>
          <option value="">Escolha uma viagem</option>
          {tripOptions}
        </select>
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Name"
          required
          pattern={"^.{3,}"}
        />
        <input
          name={"age"}
          value={form.age}
          onChange={onChange}
          placeholder="Age"
          required
          type="number"
          min={18}
        />
        <input
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder={"Application Text"}
          required
          pattern={"^.{30,}"}
        />
        <input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder={"Profession"}
          required
          pattern={"^.{10,}"}
        />
        <select
          onChange={onChange}
          name={"country"}
          value={form.country}
          required
        >
          <option value={""}>Escolha um país</option>
          {countryOptions}
        </select>
        <button> Enviar </button>
      </form>
      <div>
        <button onClick={() => goBack(navigate)}> Voltar </button>
      </div>
    </div>
  );
};

export default ApplicationFormPage;
