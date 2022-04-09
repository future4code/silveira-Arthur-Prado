import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "arthur-prado-silveira",
  },
};

class NovaPlaylist extends React.Component {
  state = {
    playlist: [],
    rascunhoNovaPlaylist: "",
    paginaDeDetalhes: false,
    dadosPlaylistDetalhes: {},
  };

  criaPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.rascunhoNovaPlaylist,
    };
    axios
      .post(url, body, headers)
      .then((response) => {
        console.log(response);
        this.pegaPlaylists();
        this.limpaInputs();
      })
      .catch((err) => {
        console.log(err);
        this.limpaInputs();
      });
  };

  componentDidMount = () => {
    this.pegaPlaylists();
  };

  pegaPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({
          playlist: response.data.result.list,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  onChangePlaylist = (event) => {
    this.setState({
      rascunhoNovaPlaylist: event.target.value,
    });
  };

  limpaInputs = () => {
    this.setState({
      rascunhoNovaPlaylist: "",
    });
  };

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, headers)
      .then(() => {
        this.pegaPlaylists();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onClickDetalhesPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/`;
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({
          dadosPlaylistDetalhes: response.data.result.tracks,
        });
        this.mostrarDetalhesPlaylist();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  mostrarDetalhesPlaylist = () => {
    this.setState({
      paginaDeDetalhes: true,
    });
  };

  render() {
    const playlistAtualizada = this.state.playlist.map((playlist, index) => {
      return (
        <div>
          <li
            key={index}
            onClick={() => this.onClickDetalhesPlaylist(playlist.id)}
          >
            Playlist: {playlist.name}
            <button onClick={() => this.deletarPlaylist(playlist.id)}>
              ❌
            </button>
          </li>
        </div>
      );
    });
    return (
      <div>
        <input
          value={this.state.rascunhoNovaPlaylist}
          onChange={this.onChangePlaylist}
        />
        <button onClick={this.criaPlaylist}>Adicionar Playlist</button>
        <ol>{playlistAtualizada}</ol>
        {this.state.paginaDeDetalhes === true ? (
          <div>
            {this.state.dadosPlaylistDetalhes.map((musica) => (
              <div>
                <p>Musica: {musica.name}</p>
                <p>Artista: {musica.artist} </p>
                <p>Link da música: {musica.url} </p>
              </div>
            ))}
            {/* <audio controls>
              <source src={""} />
            </audio> */}
          </div>
        ) : null}
      </div>
    );
  }
}

export default NovaPlaylist;
