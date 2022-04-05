import React from "react";
import styled from "styled-components";
import axios from "axios";

const headers = {
  Authorization: "arthur-prado-silveira",
};

class App extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
    currentPage: "signUp",
    users: [],
  };

  onChangeInputName = (event) => {
    this.setState({
      inputName: event.target.value,
    });
  };

  onChangeInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    });
  };

  addUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(url, body, { headers: headers })
      .then((resposta) => {
        console.log(resposta.status);
        alert("O Usuário foi adicionado");
        this.getUsers();
        this.clearFields();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  getUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, { headers: headers })
      .then((response) => {
        console.log(response.data);
        this.setState({
          users: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  clearFields = () => {
    this.setState({
      inputEmail: "",
      inputName: "",
    });
  };

  onClickButton = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({
        currentPage: "users",
      });
    }
    if (this.state.currentPage === "users") {
      this.setState({
        currentPage: "signUp",
      });
    }
  };

  deleteUsers = (id) => {

    if (window.confirm ("Você realmente deseja apagar este usuário?") === false) {
      return
    }
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios
      .delete(url, { headers: headers })
      .then(() => {
        this.getUsers();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  render() {
    if (this.state.currentPage === "signUp") {
      //Renderização Condicional
      return (
        <div>
          <button onClick={this.onClickButton}>Trocar de Tela</button>
          <input
            value={this.state.inputName}
            onChange={this.onChangeInputName}
            placeholder="Nome"
          />

          <input
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
            placeholder="Email"
          />
          <button onClick={this.addUser}>Criar Usuário</button>
        </div>
      );
    }

    if (this.state.currentPage === "users") {
      return (
        //renderização condicional
        <div>
          <button onClick={this.onClickButton}>Trocar de Tela</button>
          <ol>
            {this.state.users.map((user) => {
              return (
                <li key={user.id}>
                  {user.name}
                  <button onClick={() => this.deleteUsers(user.id)}>❌</button>
                </li>
              );
            })}
          </ol>
        </div>
      );
    }
    return (
      <div>
        <p>Página Não encontrada</p>
      </div>
    );
  }
}

export default App;
