import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardStyle, {
  ImgStyled,
  NameStyled,
  ParagraphStyled,
} from "../../Components/CardStyle";
import InputsStyled from "../../Components/InputsStyled";
import { goToLoginPage } from "../../Routes/Coordinator";
import styled from "styled-components";
import FeedStyled from "./FeedStyled";
import Footer from "../../Components/Footer";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  border-bottom: solid 1px black;
`;
const TitleStyle = styled.div`
  color: #e86e5a;
  font-weight: 900;
  font-family: Roboto, Bold, 16px Center;
`;



const headers = {
  auth: localStorage.getItem("token"),
};

const FeedPage = () => {
  const [cardDetails, setCardDetails] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants";
    axios
      .get(url, { headers: headers })
      .then((response) => {     
        setCardDetails(response.data.restaurants);
      })
      .catch((error) => {
            alert('Você não está logado.')
            goToLoginPage(navigate)
            console.log(error.data)
      });
  }, []);

  const cardMapeado = cardDetails?.map((detalhe) => {
    return (
      <CardStyle>
        <ImgStyled src={`${detalhe.logoUrl}`} alt=""></ImgStyled>
        <NameStyled>
          <b>{detalhe.name}</b>
        </NameStyled>
        <ParagraphStyled>
          <b>Tempo de entrega: </b> {detalhe.deliveryTime} min
        </ParagraphStyled>
        <ParagraphStyled>
          <b>Frete:</b> R${detalhe.shipping},00
        </ParagraphStyled>
      </CardStyle>
    );
  });

  

  return (
    <div>
      <FeedStyled>
        <HeaderStyle>
          <TitleStyle>
            <h2>Rappi4</h2>
          </TitleStyle>
        </HeaderStyle>
        <InputsStyled placeholder="🔍 Restaurante" />
        <div>{cardMapeado}</div>
        <Footer />
      </FeedStyled>
    </div>
  );
};

export default FeedPage;
