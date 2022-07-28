import axios from "axios";
import React, { useEffect, useState } from "react";
import CardStyle, {
  ImgStyled,
  NameStyled,
  ParagraphStyled,
} from "../../Components/CardStyle";
import InputsStyled from "../../Components/InputsStyled";
import styled from "styled-components";
import FeedStyled from "./FeedStyled";
import Footer from "../../Components/Footer";
import useProtectedPage from "../../Hooks/useProtectedPage";
import FilterByType from "../../Components/FilterByType";
import { goToRestaurantsPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

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

const FeedPage = () => {
  useProtectedPage();
  const [restaurants, setRestaurants] = useState([{}]);
  const [controlInputBusca, setControlInputBusca] = useState("");
  const [categoria, setCategoria] = useState("")

  const navigate = useNavigate()

  const headers = {
    auth: localStorage.getItem("token"),
  };

  const showRestaurants = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants";
    axios
      .get(url, { headers: headers })
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  useEffect(() => {
    showRestaurants();
  }, []);

  const onChangeInputBusca = (event) => {
    setControlInputBusca(event.target.value);
  };



  const cardsFiltrados = restaurants?.filter((card) => {
      if (controlInputBusca === "") {
        return card;
      }
      else if (card.name.toLowerCase().includes(controlInputBusca.toLowerCase())) {
        return card;
      }
      return false
    })
    .filter((card) => {
      if (card.category === categoria || categoria === "") {
        return card
      }
      return false
    })
    .map((card, index) => {
      return (
        <CardStyle onClick={() => goToRestaurantsPage(navigate, card.id)} key={index}>
          <ImgStyled src={`${card.logoUrl}`} alt=""></ImgStyled>
          <NameStyled>
            <b>{card.name}</b>
          </NameStyled>
          <ParagraphStyled>
            <b>Tempo de entrega: </b> {card.deliveryTime} min
          </ParagraphStyled>
          <ParagraphStyled>
            <b>Frete:</b> R${card.shipping},00
          </ParagraphStyled>
        </CardStyle>
      );
    });

    console.log(categoria)


  return (
    <div>
      <FeedStyled>
        <HeaderStyle>
          <TitleStyle>
            <h2>Rappi4</h2>
          </TitleStyle>
        </HeaderStyle>
        <InputsStyled
          value={controlInputBusca}
          onChange={onChangeInputBusca}
          placeholder="🔍 Restaurante"
        />
        <FilterByType setCategoria={setCategoria} />
        <div>{cardsFiltrados}</div>
        <Footer />
      </FeedStyled>
    </div>
  );
};

export default FeedPage;
