import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToLoginPage } from "../routes/coordinator";
import axios from "axios";

const CardCandidate = styled.div`
  border: 2px solid black;
`;

const TripDetailsPage = () => {
  const [detailsTrip, setDetailsTrip] = useState({
    candidates: [],
    approved: [],
  });
  const { id } = useParams();

  const decideCandidates = (candidateId, approve) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trips/${id}/candidates/${candidateId}/decide`;
    const body = {
      approve: approve,
    };

    axios
      .put(url, body, axiosConfig)
      .then(() => {
        getDetailsTrip(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const axiosConfig = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const navigate = useNavigate();

  const getDetailsTrip = (id) => {
    const urlDetails = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthur-prado-silveira/trip/${id}`;

    axios
      .get(urlDetails, axiosConfig)
      .then((response) => {
        setDetailsTrip(response.data.trip);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    if (localStorage.token === undefined) {
      goToLoginPage(navigate);
    }
  }, []);

  useEffect(() => {
    getDetailsTrip(id);
  }, []);

  const mappedCandidates = detailsTrip.candidates.map((candidate) => {
    return (
      <CardCandidate>
        <h3>Nome: {candidate.name} </h3>
        <p>Profissão: {candidate.profession} </p>
        <p>Idade: {candidate.age} </p>
        <p>País: {candidate.country} </p>
        <p>Texto de aplicação: {candidate.applicationText} </p>
        <p> {candidate.id} </p>
        <button onClick={() => decideCandidates(candidate.id, true)}>
          Aprovar
        </button>
        <button onClick={() => decideCandidates(candidate.id, false)}>
          Reprovar
        </button>
      </CardCandidate>
    );
  });

  const approvedCandidates = detailsTrip.approved.map((candidate) => {
    return (
      <CardCandidate>
        <h3>Nome: {candidate.name} </h3>
        <p>Profissão: {candidate.profession} </p>
        <p>Idade: {candidate.age} </p>
        <p>País: {candidate.country} </p>
        <p>Texto de aplicação: {candidate.applicationText} </p>
        <p> {candidate.id} </p>
      </CardCandidate>
    );
  });

  return (
    <div>
      <p>Nome: {detailsTrip.name}</p>
      <p>Duração em dias: {detailsTrip.durationInDays}</p>
      <p>Planeta: {detailsTrip.planet}</p>
      <p>Data: {detailsTrip.date}</p>
      <p>Descrição: {detailsTrip.description}</p>
      <button onClick={() => goBack(navigate)}> Voltar </button>
      <h3>Candidatos Pendentes</h3>
      {mappedCandidates}

      <h3>Candidatos Aprovados</h3>
      {approvedCandidates}
    </div>
  );
};

export default TripDetailsPage;
