import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  goToCartPage,
  goToFeedPage,
  goToProfilePage,
} from "../Routes/Coordinator";

const FooterStyle = styled.div`
  height: 40px;
  width: 400px;
  border: solid 1px grey;
  border-right: none;
  border-left: none;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin-top: 20px;
`;

const PStyle = styled.p`
  margin: 30px;
  :hover {
    cursor: pointer;
    background-color: #E86E5A;
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterStyle>
      <PStyle onClick={() => goToFeedPage(navigate)}>🏠</PStyle>
      <PStyle onClick={() => goToCartPage(navigate)}>🛒</PStyle>
      <PStyle onClick={() => goToProfilePage(navigate)}>👤</PStyle>
    </FooterStyle>
  );
};

export default Footer;
