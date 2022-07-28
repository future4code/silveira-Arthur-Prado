import React from "react";
import styled from "styled-components";

const ImgProductStyled = styled.img`
  width: 96px;
  height: 100%;
  border-radius: 8px 0 0 8px;
  background-size: cover;
  background-position: center;
`;

const ContainerImage = styled.div`
  height: 100px;
`;

const MainContainer = styled.div`
  display: flex;
  text-align: flex-start;
  width: 100%;
  border: solid 1px grey;
  border-radius: 8px;
  margin-bottom: 20px;
`;
const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 100%;
`;

const Name = styled.h3`
  color: #e86e5a;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Descricao = styled.span`
  font-size: 14px;
  color: #8e8e93;
  margin-bottom: 5px;
`;

const Preco = styled.h3`
  font-size: 12px;
  margin-bottom: 5px;
`;

const CardProductStyled = (props) => {
  return (
    <MainContainer>
      <ContainerImage>
        <ImgProductStyled src={`${props.foto}`} alt=""></ImgProductStyled>
      </ContainerImage>
      <ContainerDetails>
        <Name>{props.nome}</Name>
        <Descricao>{props.descricao}</Descricao>
        <Preco>
          <b>
            {props.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </b>
        </Preco>
      </ContainerDetails>
    </MainContainer>
  );
};

export default CardProductStyled;
