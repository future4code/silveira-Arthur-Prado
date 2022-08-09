import React from "react";
import styled from "styled-components";

const loteriaCores = {
  0: "#6BEFA3",
  1: "#8666EF",
  2: "#DD7AC6",
  3: "#FFAB64",
  4: "#5AAD7D",
  5: "#BFAF83",
};



const Titulo = styled.h3`
  text-transform: uppercase;
  color: white;
  margin: 50px;

`;

const Background = styled.div`
  background-color: ${(props) => loteriaCores[props.id]};
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;

const DivNumeros = styled.div`
  background-color: #efefef;
  flex: 1;
  display: table;
  table-layout: fixed;
  padding-left: 25px;
`;

const Radius = styled.div`
  background-color: #efefef;
  color: #efefef;
  border-radius: 95% 95% 0 0;
  margin-top: -100px;
`;

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NumeroConcursos = styled.h6`
  color: white;
  margin: 120px;
`

const NumerosStyled = styled.ul`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  align-items: center;
  margin: 15px;
  display: table-cell;
  overflow: hidden;
  float: left;
  padding: 15px;
`

const SelectLoterias = ({ data, id, loteria, numeros, loterias, children }) => {
  const sorteiaNumeros = numeros.map((numero) => {
    return <NumerosStyled key={numero}> {numero} </NumerosStyled>;
  });

  const loteriaAtual = loterias.find((l) => {
    return l.id === loteria;
  });

  return (
    <Main>
      <Background id={loteria}>
        {children}
        <Titulo>{loteriaAtual?.nome}</Titulo>
        <NumeroConcursos>Concurso Nº{id}</NumeroConcursos>
      </Background>
      <Radius>
        <p>a</p>
      </Radius>
      <DivNumeros>
        <ul><b>{sorteiaNumeros}</b></ul>
      </DivNumeros>
    </Main>
  );
};

export default SelectLoterias;
