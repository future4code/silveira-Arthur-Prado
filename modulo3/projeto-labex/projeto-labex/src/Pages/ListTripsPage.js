import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { goBack } from "../routes/coordinator";
import { goToApplicationFormPage } from "../routes/coordinator";
import axios from "axios";


const ListTripsPage = () => {

  const [showTripsList, setShowTripsList] = useState([])

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trips"

  const navigate = useNavigate()

useEffect (() => {
  axios.get(url)
  .then((response) => {
    setShowTripsList(response.data.trips)
  })
  .catch((error) => {
    console.log(error)
  })
}, [])
  
  const mapTripsList = showTripsList.map((trip) => {
    return (
      <div>
        <p>{trip.name}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.planet}</p>
        <p>{trip.date}</p>
        <p>{trip.description}</p>
      </div>
    )
  })

  return (
    <div>
      {mapTripsList}
      <button onClick={() => goBack(navigate)}> Voltar </button>
      <button onClick={() => goToApplicationFormPage(navigate)}> Inscrever-se </button>
    </div>
  );
};

export default ListTripsPage;
