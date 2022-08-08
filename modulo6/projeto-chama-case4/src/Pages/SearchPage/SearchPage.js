import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Base_Url from "../../Constants/Base_Url";
import UseForm from "../../Hooks/UseForm";
import { goToHistoryPage } from "../../Routes/Coordinator";
import {
  ButtonStyled,
  ContainerInfo,
  ContainerSearch,
  ImageUser,
  InputSearch,
  MainContainer,
} from "./Styled";

const SearchPage = () => {
  const [user, setUser] = useState({});

  const { form, onChange, clearFields } = UseForm({
    search: "",
  });

  const navigate = useNavigate();

  const getUser = () => {
    const url = `${Base_Url}/users/${form.search}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        console.log(getRepos());
        clearFields();
      })
      .catch((error) => {
        alert('Digite um login válido.')
        console.log(error.data);
      });
  };

  const getRepos = () => {
    const url = `${Base_Url}/search/repositories?name`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <MainContainer>
      <h1>Encontre um usuário do GitHub!</h1>
      <ContainerSearch>
        <InputSearch
          name={"search"}
          type={"search"}
          value={form.search}
          onChange={onChange}
          placeholder="Procure por um login"
        />
        <ButtonStyled onClick={getUser}>Procurar</ButtonStyled>
        <ButtonStyled onClick={() => goToHistoryPage(navigate)}>
          Histórico
        </ButtonStyled>
      </ContainerSearch>
      {user.login ? 
      <ContainerInfo>
        <ImageUser src={user.avatar_url} />
        <h3>{user.name}</h3>
        <p>
          <b>Email:</b> {user.email ? user.email : "Não informado"}
        </p>
        <p>
          <b>Bio:</b> {user.bio ? user.bio : "Não informado"}
        </p>
        <p>
          <b>Login:</b> {user.login}
        </p>
        <p>
          <b>Id:</b> {user.id}
        </p>
      </ContainerInfo>
      : false}
    </MainContainer>
  );
};

export default SearchPage;
