import React from "react";

class SecaoCompartilhamento extends React.Component {
  state = {
    compartilhamento: "",
  };

  onChangeCompartilhamento = (event) => {
    this.setState({ compartilhamento: event.target.value });
  };

  render() {
    const imprimirInstagram = () => {
      console.log("Post compartilhado no Instagram: ", this.state.compartilhamento);
    };
    const imprimirTwitter = () => {
      console.log("Post compartilhado no Twitter: ", this.state.compartilhamento);
    };
    const imprimirFacebook = () => {
      console.log("Post compartilhado no Facebook: ", this.state.compartilhamento);
    };

    return (
      <div>
        <input  value={this.state.compartilhamento} onChange={this.onChangeCompartilhamento} />
        <button onClick={imprimirInstagram}>Instagram</button>
        <button onClick={imprimirTwitter}>Twitter</button>
        <button onClick={imprimirFacebook}>Facebook</button>
      </div>
    );
  }
}

export default SecaoCompartilhamento;
