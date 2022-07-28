import React from "react"
import styled from "styled-components"

const FilterByType = (props) => {

  const DivCategorias = styled.div`
    display: flex;
    overflow-x: scroll;
    width: 90%;
    margin-left: 20px;
  `

  const ButtonStyled = styled.button`
    border: none;
    margin: 15px;
    background-color: white;
    color: black;
  `

  return (
      <DivCategorias>
        <ButtonStyled onClick={() => props.setCategoria("")}><b>Todos</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Árabe")}><b>Árabe</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Asiática")}><b>Asiática</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Baiana")}><b>Baiana</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Hamburguer")}><b>Burguer</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Carnes")}><b>Carnes</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Italiana")}><b>Italiana</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Mexicana")}><b>Mexicana</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Petiscos")}><b>Petiscos</b></ButtonStyled>
        <ButtonStyled onClick={() => props.setCategoria("Sorvetes")}><b>Sorvetes</b></ButtonStyled>
      </DivCategorias>
  )
}

export default FilterByType