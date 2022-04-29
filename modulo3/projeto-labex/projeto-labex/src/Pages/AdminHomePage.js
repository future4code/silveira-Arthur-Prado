import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  goToHomePage,
  goToLoginPage,
  goToCreateTripPage,
  goToTripDetailsPage
} from "../routes/coordinator";
import axios from 'axios'

const AdminHomePage = () => {

  const [tripName, setTripName] = useState([])

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trips"


  const navigate = useNavigate();

  const axiosConfig = {
    headers: {
      auth: localStorage.getItem("token")
    }
  }

  const getTrips = () => {
    
    axios.get(url)
    .then((response) => {
      setTripName(response.data.trips)
    })
    .catch((error) => {
      console.log(error.data)
    })
  }

  useEffect (() => {
    getTrips()
  }, [])

  const onClickDelete = (id) => {

    const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trips/${id}`

    axios
      .delete(urlDelete, axiosConfig)
      .then((response) => {
        getTrips()
      })
      .catch((error) => {
        console.log(error.data);
      });
  }
  
  const logout = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };

  useEffect(() => {
    if (localStorage.token === undefined) {
      goToLoginPage(navigate);
    }
  }, []);

  const goToDetailsPage = (id) => {
      goToTripDetailsPage(navigate, id)
  }
   

  const mapTripsName = tripName.map((trip) => {
    return(
      <div>
        <span value={trip.id} onClick={() => goToDetailsPage(trip.id)}>{trip.name}</span> 
        <button key={trip.id} value={trip.id} onClick={() => onClickDelete(trip.id)}>Deletar</button>
      </div>
    )
  })

  return (
    <div>
      {mapTripsName}
      <button onClick={() => goToHomePage(navigate)}> Voltar </button>
      <button onClick={() => goToCreateTripPage(navigate)}>
        {" "}
        Criar Viagem{" "}
      </button>
      <button onClick={() => logout()}> Deslogar </button>
    </div>
  );
};

export default AdminHomePage;
