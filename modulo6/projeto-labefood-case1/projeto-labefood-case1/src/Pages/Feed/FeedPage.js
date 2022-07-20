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
  useProtectedPage()
  const [restaurants, setRestaurants] = useState([{}]);
  // const [controlInputBusca, setControlInputBusca] = useState();

  const headers = {
    auth: localStorage.getItem("token"),
  };

  const showRestaurants =  (() => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants";
      axios
      .get(url, { headers: headers }) 
      .then((response)  => {     
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
            console.log(error.data)
      });
  });
   useEffect(()  => {
     showRestaurants()
  }, [])

  const cardMapeado = restaurants?.map((detalhe, index) => {
    return (
      <CardStyle key={index}>
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

  // const onChangeInputBusca = (event) => {
  //   setControlInputBusca({controlInputBusca: event.target.value})
  // }
  
  // const cardFiltrado = restaurants?.filter((propriedade) => {
  //     return(
  //       <CardStyle>
  //       <ImgStyled src={`${propriedade.logoUrl}`} alt=""></ImgStyled>
  //       <NameStyled>
  //         <b>{propriedade.name.includes(controlInputBusca)}</b>
  //       </NameStyled>
  //       <ParagraphStyled>
  //         <b>Tempo de entrega: </b> {propriedade.deliveryTime} min
  //       </ParagraphStyled>
  //       <ParagraphStyled>
  //         <b>Frete:</b> R${propriedade.shipping},00
  //       </ParagraphStyled>
  //     </CardStyle>
  //     )
  // })

  return (
    <div>
      <FeedStyled>
        <HeaderStyle>
          <TitleStyle>
            <h2>Rappi4</h2>
          </TitleStyle>
        </HeaderStyle>
        <InputsStyled placeholder="🔍 Restaurante" />
        <div>
          {cardMapeado}
          {/* {cardFiltrado.map((card) => {
            return (
              {logoUrl}
              {deliveryTime}
              {card.shipping}            )
          })} */}
        </div>
        <Footer />
      </FeedStyled>
    </div>
  );
};

export default FeedPage;
