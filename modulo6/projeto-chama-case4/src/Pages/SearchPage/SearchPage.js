import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RepoCard from "../../Components/RepoCard";
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
  const [repos, setRepos] = useState([])
  // const [history, setHistory] = useState([])

  const { form, onChange, clearFields } = UseForm({
    search: "",
  });

  const navigate = useNavigate();

  const getUser = () => {
    const url = `${Base_Url}/users/${form.search}`;

    axios
      .get(url)
      .then((response) => {
        const termo = {
          userName: form.search, 
          timeStamp: Date.now()
        } 
        const currentHistory = JSON.parse(localStorage.getItem('history')) || []
        const index = currentHistory.findIndex((term) => {
          return term.userName === form.search
        })

        const isRepeated = index !== -1

        if(!isRepeated) {
          localStorage.setItem('history', JSON.stringify([...currentHistory, termo]))
        }
        else{
          currentHistory[index].timeStamp = Date.now()
          localStorage.setItem('history', JSON.stringify(currentHistory))
        }
        
        console.log(response.data);
        setUser(response.data);
        getRepos(response.data.repos_url)
        clearFields();
      })
      .catch((error) => {
        alert('Digite um login válido.')
        console.log(error.data);
      });
  };

  const getRepos = (url) => {
    console.log(url)
    axios
      .get(url)
      .then((response) => {
        setRepos(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const mappedRepos = repos.map((repo) => {
    return <RepoCard key={repo.id} repo={repo} />
  })

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
          <b>Email:</b> {user.email || "Não informado"}
        </p>
        <p>
          <b>Bio:</b> {user.bio || "Não informado"}
        </p>
        <p>
          <b>Login:</b> {user.login}
        </p>
        <p>
          <b>Id:</b> {user.id}
        </p>
        {mappedRepos}
      </ContainerInfo>
      : false}
    </MainContainer>
  );
};

export default SearchPage;
