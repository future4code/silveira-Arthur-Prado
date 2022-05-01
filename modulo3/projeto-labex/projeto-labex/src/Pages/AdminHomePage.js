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
import Header from "../components/Header";
import Footer from "../components/Footer";

const CardStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  border: solid black 2px;
  align-content: flex-start;
  height: 10vh;
`
const Body = styled.div`
  margin-bottom: 179px;
`

const SpanCard = styled.span`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: 0;
`

const Buttons = styled.button`
  display: flex;
  justify-content: center;
  background-color: #4caf50;
  border: solid 1px black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: auto;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    background-color: aquamarine;
  }
`;


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
      <CardStyle>
        <SpanCard value={trip.id} onClick={() => goToDetailsPage(trip.id)}><h3>{trip.name}</h3></SpanCard> 
        <Buttons key={trip.id} value={trip.id} onClick={() => onClickDelete(trip.id)}>Deletar</Buttons>
      </CardStyle>
    )
  })

  return (
    <div>
      <Header/>
      <Body>
      {mapTripsName}
      <Buttons onClick={() => goToHomePage(navigate)}> Voltar </Buttons>
      <Buttons onClick={() => goToCreateTripPage(navigate)}>
        {" "}
        Criar Viagem{" "}
      </Buttons>
      <Buttons onClick={() => logout()}> Deslogar </Buttons>
      </Body>
      <Footer/>
    </div>
  );
};

export default AdminHomePage;
