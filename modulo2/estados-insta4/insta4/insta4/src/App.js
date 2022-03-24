import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post.js";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SecaoInput = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

const InputUnico = styled.input `
  border: solid black 2px;
  margin: 10px;
`

const BotaoUnico = styled.button `
  margin: 10px;
  border: solid green 2px;
`




class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?e",
        fotoPost: "https://picsum.photos/200/150?f",
      },
      {
        nomeUsuario: "José",
        fotoUsuario: "https://picsum.photos/50/50?b",
        fotoPost: "https://picsum.photos/200/150?a",
      },
      {
        nomeUsuario: "João",
        fotoUsuario: "https://picsum.photos/50/50?c",
        fotoPost: "https://picsum.photos/200/150?d",
      },
    ],
    valorInputNome: "",
    valorInputFoto: "",
    valorInputFotoPost: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputFotoPost,
    };
    this.setState({valorInputNome:"", valorInputFoto: "", valorInputFotoPost:""});
    const novosPosts = [...this.state.posts, novoPost];
    this.setState({posts: novosPosts});
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value});
  };

  onChangeInputFoto = (event) => {
    this.setState ({valorInputFoto: event.target.value});
  };

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value});
  };


  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <div>
        <SecaoInput>
          <InputUnico
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />

          <InputUnico
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto do Usuário"}
          />

          <InputUnico
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do Post"}
          />
          <BotaoUnico onClick={this.adicionaPost}>Adicionar</BotaoUnico>
        </SecaoInput>

        <MainContainer>
          {listaDePosts}
        </MainContainer>
      </div>
    )
  }
}

export default App;
