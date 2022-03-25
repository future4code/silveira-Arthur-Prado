import React from "react";
import "./App.css";
import styled from "styled-components";

const BalaoDeMensagens = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const CorpoDasMensagens = styled.div`
  display: flex;
  margin: auto;
  width: 40vw;
  height: 95vh;
  border: solid black 1px;
  flex-direction: column-reverse;
  
`;

const MenuDasMensagens = styled.div `
  display:flex;
`

const NomeEmMaiuscula = styled.strong `
  text-transform: capitalize;
`

const InputUsuario = styled.input `
  width: 8vw;

`

const InputMensagem = styled.input `
  flex-grow: 1;
`

class App extends React.Component {
  state = {
    mensagens: [
      { usuario: "soter",
        mensagem: "Olá",
      }
    ],
    rascunhoInputUsuario: "",
    rascunhoInputMensagem: "",
  };

  adicionaMensagem = () => {
    const rascunhoMensagem = {
      usuario: this.state.rascunhoInputUsuario,
      mensagem: this.state.rascunhoInputMensagem,
    };
    this.setState({ rascunhoInputUsuario: "", rascunhoInputMensagem: "" });
    const novasMensagens = [...this.state.mensagens, rascunhoMensagem];
    this.setState({ mensagens: novasMensagens });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ rascunhoInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ rascunhoInputMensagem: event.target.value });
  };

  render() {
    const listaDeMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <BalaoDeMensagens>
          <p> <NomeEmMaiuscula>{mensagem.usuario}</NomeEmMaiuscula>:</p>
          
          <p>{mensagem.mensagem}</p>
        </BalaoDeMensagens>
      );
    });

    return (
      <CorpoDasMensagens>
        <MenuDasMensagens>
        <InputUsuario
         
          value={this.state.rascunhoInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder="Nome do Usuário"
        />

        <InputMensagem
          value={this.state.rascunhoInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder="Mensagem"
        />

        <button onClick={this.adicionaMensagem}>Adicionar</button>
        </MenuDasMensagens>
        <div>{listaDeMensagens}</div>
      </CorpoDasMensagens>
    );
  }
}

export default App;
