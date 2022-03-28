import React from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

import iconeEstrelaPreta from "../../img/estrela.png";
import iconeEstrelaBranca from "../../img/estrela_branca.png";
import iconeCompartilhar from "../../img/share.png";
import SecaoCompartilhamento from "../SecaoCompartilhamento/SecaoCompartilhamento";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvou: false,
    compartilha: false,
  };

  onClickCurtida = () => {
    if (this.state.curtido === false) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1,
      });
    }

    if (this.state.curtido === true) {
      const novoEstado = {
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1,
      };
      this.setState(novoEstado);
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  onClickSalvar = () => {
    if (this.state.salvou === false) {
      this.setState({
        salvou: true,
      });
    } else {
      this.setState({
        salvou: false,
      });
    }
  };

  onClickCompartilhar = () => {
    this.setState({
      compartilha: !this.state.compartilha
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let iconeEstrela;
    if (this.state.salvou === true) {
      iconeEstrela = iconeEstrelaPreta;
    } else {
      iconeEstrela = iconeEstrelaBranca;
    }

    let compartilha 
    if (this.state.compartilha) {
      compartilha = (
        <SecaoCompartilhamento/>
      );
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeEstrela}
            onClickIcone={this.onClickSalvar}
          />

          <IconeComContador
            icone={iconeCompartilhar}
            onClickIcone={this.onClickCompartilhar}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
        {compartilha}
      </PostContainer>
    );
  }
}

export default Post;
