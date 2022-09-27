import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../Constants/BaseURL";
import { goBack } from "../../Routes/Coordinator";
import { CardAddress, HeaderParagraph, HeaderProfile, MarginParagraphs, OrderHistory, OrderHistoryParagraph } from "./ProfileStyled";

const ProfilePage = () => {
  const [perfilDetails, setPerfilDetails] = useState({});

  const navigate = useNavigate();

  const headers = {
    auth: localStorage.getItem("token"),
  };

  const getPerfilDetails = () => {
    axios
      .get(`${BaseURL}/profile`, { headers: headers })
      .then((response) => {
        setPerfilDetails(response.data.user);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getPerfilDetails();
  }, []);

  return (
    <div>
      <HeaderProfile>
        <p onClick={() => goBack(navigate)}>↩</p>
        <HeaderParagraph>
          <b>Meu perfil</b>
        </HeaderParagraph>
      </HeaderProfile>
      <div>
        <MarginParagraphs>{perfilDetails.name}</MarginParagraphs>
        <MarginParagraphs>{perfilDetails.email}</MarginParagraphs>
        <MarginParagraphs>{perfilDetails.cpf}</MarginParagraphs>
      </div>
      <CardAddress>
        <MarginParagraphs> Endereço cadastrado </MarginParagraphs>
        <MarginParagraphs><b> {perfilDetails.address} </b></MarginParagraphs>
      </CardAddress>
      <OrderHistory>
        <OrderHistoryParagraph><b>Histórico de pedidos</b></OrderHistoryParagraph>
      </OrderHistory>
    </div>
  );
};
export default ProfilePage;
