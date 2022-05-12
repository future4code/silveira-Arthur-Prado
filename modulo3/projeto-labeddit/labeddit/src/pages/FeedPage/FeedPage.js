import React, { useEffect, useState } from "react";
import { goToPostPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { Button } from "@mui/material";
import Header from "../../components/Header/Header";
import PostCard from "../../components/Card/PostCard";
import styled from "styled-components";

const Votes = styled.p`
    margin-left: 30px;
`
const  PageTitle = styled.h1`
    justify-content: center;
    text-align: center;
    margin-top: 60px;
`

const FeedPage = () => {
  const navigate = useNavigate();
  const [getPosts, setGetPosts] = useState([]);

  const url = `${BASE_URL}/posts`;
  const { token } = localStorage;

  const onClickLike = (id, direction) => {
    const urlPosts = `${BASE_URL}/posts/${id}/votes`;

    const body = {
      direction: direction,
    };
    axios
      .post(urlPosts, body, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        posts();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  const posts = () => {
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })

      .then((response) => {
        setGetPosts(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  useEffect(() => {
    posts();
  }, []);

  const mappedPosts = getPosts.map((post) => {
    return (
      <div key={post.id}>
        <PostCard />
        <h3>Nome: {post.username}</h3>
        <p>Mensagem: {post.body}</p>
        <Button value={post.id} onClick={() => onClickLike(post.id, 1)}>
          👍 <Votes>{post.voteSum}</Votes>
        </Button>

        <Button value={post.id} onClick={() => onClickLike(post.id, -1)}>
          👎
        </Button>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <PageTitle>Lista de Posts</PageTitle>
      {mappedPosts}
      <Button onClick={() => goToPostPage(navigate)}>Abrir Post</Button>
    </div>
  );
};

export default FeedPage;
