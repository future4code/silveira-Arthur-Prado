import React from "react";
import styled from "styled-components";

export const TituloStyled = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E86E5A;
  font-weight: 900;
  font-family: Roboto, Bold, 16px Center;
`

const Titulo = () => {
  return (
    <div>
      <TituloStyled>Rappi4</TituloStyled>
    </div>
  );
};

export default Titulo