import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProductStyled, { ImgProductStyled } from "../../Components/CardProductStyled";
import { BaseURL } from "../../Constants/BaseURL";

const RestaurantsPage = () => {
  const [restaurant, setRestaurant] = useState([]);
  const params = useParams();

  const { id } = params;

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    const headers = {
      auth: localStorage.getItem("token"),
    };
    const url = `${BaseURL}/restaurants/${id}`;

    axios
      .get(url, { headers: headers })
      .then((response) => {
        setRestaurant(response.data.restaurant.products);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const showRestaurant = restaurant?.map((rest, index) => {
    return (
      <CardProductStyled key={index} 
      nome={rest.name} 
      descricao={rest.description} 
      preco={rest.price}
      foto={rest.photoUrl} 
      />
    );
  });

  return <div>{showRestaurant}</div>;
};

export default RestaurantsPage;
