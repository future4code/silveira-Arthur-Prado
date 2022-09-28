import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardProductStyled from "../../Components/CardProductStyled";
import Header from "../../Components/Header";
import { BaseURL } from "../../Constants/BaseURL";
import {
  DivPai,
  DivRestaurantDetails,
  ImgStyledRest,
  ParagraphsDivDetails,
  ParagraphTitleDetails,
} from "./RestaurantsStyled";

const RestaurantsPage = () => {
  const [restaurantProducts, setRestaurantProducts] = useState([]);
  const [restaurant, setRestaurant] = useState([{}]);
  const params = useParams();

  const { id } = params;

  const navigate = useNavigate();

  const headers = {
    auth: localStorage.getItem("token"),
  };

  useEffect(() => {
    getRestaurantProducts();
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    const url = `${BaseURL}/restaurants`;
    axios
      .get(url, { headers: headers })
      .then((response) => {
        setRestaurant(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const getRestaurantProducts = () => {
    const url = `${BaseURL}/restaurants/${id}`;

    axios
      .get(url, { headers: headers })
      .then((response) => {
        setRestaurantProducts(response.data.restaurant.products);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const showRestaurantDetails = restaurant?.map((rest, index) => {
    if (id === rest.id) {
      return (
        <DivRestaurantDetails key={index}>
          <ImgStyledRest src={`${rest.logoUrl}`}></ImgStyledRest>
          <ParagraphTitleDetails>
            <b>{rest.name}</b>
          </ParagraphTitleDetails>
          <ParagraphsDivDetails>
            <b>{rest.deliveryTime} min </b>
          </ParagraphsDivDetails>
          <ParagraphsDivDetails>
            <b>Frete R${rest.shipping},00 </b>
          </ParagraphsDivDetails>
          <ParagraphsDivDetails>
            <b>{rest.address} </b>
          </ParagraphsDivDetails>
        </DivRestaurantDetails>
      );
    }
  });

  const showRestaurantProducts = restaurantProducts?.map((product, index) => {
    return (
      <CardProductStyled
        key={index}
        nome={product.name}
        descricao={product.description}
        preco={product.price}
        foto={product.photoUrl}
      />
    );
  });

  return (
    <DivPai>
      <Header />
      {showRestaurantDetails}
      {showRestaurantProducts}
    </DivPai>
  );
};

export default RestaurantsPage;
