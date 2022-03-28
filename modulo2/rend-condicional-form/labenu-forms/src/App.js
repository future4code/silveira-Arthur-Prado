import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";

const CorpoPagina = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Botao = styled.button`
  display: flex;
  margin: 0 auto;
  justify-content: column;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;

      case 2:
        return <Etapa2 />;

      case 3:
        return <Etapa3 />;

      default:
        return <Etapa4 />;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div>
        <CorpoPagina>
          {this.renderizaEtapa()}
        </CorpoPagina>
        {this.state.etapa !== 4 && (
        <Botao onClick={this.irParaProximaEtapa}>Próxima Etapa</Botao>
        )}
      </div>
    );
  }
}
export default App;
