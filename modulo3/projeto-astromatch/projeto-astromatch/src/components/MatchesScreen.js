import React, { useEffect, useState } from "react";
import axios from "axios";
import Perfil from "./Perfil";
import styled from 'styled-components'

const FotoENome = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 10px;
    border: solid black 1px;
    background-color: aliceblue;
`
const Botoes = styled.button`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 20px;
  cursor: pointer;
  transition: 0.5s linear;
  border-radius: 50%;
  &:hover {
    background-color: blueviolet;
  }
`;

const Nome = styled.p`
    padding: 10px;
`

const urlMostraMatches =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur-prado-silveira/matches";

const MatchesScreen = (props) => {
  const [listaDeMatch, setListaDeMatch] = useState([]);

  useEffect(() => {
    mostraMatches();
  }, []);

  const mostraMatches = () => {
    axios
      .get(urlMostraMatches)
      .then((response) => {
        setListaDeMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   const limpar = () => {
    props.limpaMatch()
    setListaDeMatch([])
   }

  return (
    <div>
      {listaDeMatch.map((pessoa) => {
        return (
          <FotoENome>
            <img width={50} height={50} key={pessoa.id} src={pessoa.photo} alt="Perfil que deu match" />
            <Nome> {pessoa.name} </Nome>
          </FotoENome>
        );
      })}
      <Botoes onClick={props.irParaHome}>Home</Botoes>
      <Botoes onClick={limpar}>Limpa Matches</Botoes>
    </div>
  );
};

export default MatchesScreen;
