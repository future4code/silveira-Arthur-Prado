import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Foto = styled.img`
    width:  350px;
    height: 350px;
    object-fit: cover;
`

const PerfilCard = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    padding: 8px;
    align-items: center;
`

const Perfil = (props) => {
  return (
    <PerfilCard>
      <Foto src={props.foto} alt="Foto de Perfil"/>
      <h1>{props.nome}, {props.idade}</h1>
      <p>{props.descricao}</p>
    </PerfilCard>
  );
};

export default Perfil;
