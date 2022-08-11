import styled from "styled-components";

export const DivCategorias = styled.div`
  display: flex;
  margin-left: 20px;

  @media(max-width:500px){
    overflow-x: scroll;
  }
  @media(min-width:500px){
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  min-height: 34px;
  margin: 15px;
  border-radius: 10px;
  background-color: ${(props) => (props.isSelected ? "#D18000" : "#FFFFFF")};
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "black")};
  @media(min-width:500px){
    width: 100px;
  }
  :hover {
    cursor: pointer;
    background-color: blue;
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ContainerPages = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
`

export const ButtonPages = styled.button`
  margin: 2px;
`

export const MainContainer = styled.div`
  margin: 0;
`