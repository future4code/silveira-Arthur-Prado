import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { goToApplicationFormPage } from "../routes/coordinator";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";


const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px black;
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

const ListTripsPage = () => {
  const [showTripsList, setShowTripsList] = useState([]);

  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trips";

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setShowTripsList(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const mapTripsList = showTripsList.map((trip) => {
    return (
      <TripCard>
        <h3>{trip.name}</h3>
        <p>Duração em dias: {trip.durationInDays}</p>
        <p>Para qual planeta: {trip.planet}</p>
        <p>Data da viagem: {trip.date}</p>
        <p>Descrição da viagem: {trip.description}</p>
      </TripCard>
    );
  });

  return (
    <div>
      <Header />
      {mapTripsList}
      <Buttons onClick={() => goBack(navigate)}>
        Voltar 
        </Buttons>
      <Buttons onClick={() => goToApplicationFormPage(navigate)}>
        Inscrever-se
      </Buttons>
      <Footer />
    </div>
  );
};

export default ListTripsPage;
