import React from "react";
import styled from "styled-components";

class Etapa2 extends React.Component {
    state = {
        etapa: 2,
    }
  render() {
    return (
      <div>
        <h2> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h2>
        <ol>
          <li>Qual curso?</li>
          <input
            value={this.state.rascunhoInputNome}
            onChange={this.onChangeInputNome}
          />
          <li>Qual a unidade de ensino?</li>
          <input
            value={this.state.rascunhoInputIdade}
            onChange={this.onChangeInputIdade}
          />
        </ol>
      </div>
    );
  }
}

export default Etapa2;
