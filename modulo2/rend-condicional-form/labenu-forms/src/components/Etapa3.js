import React from "react"


class Etapa3 extends React.Component {
    state = {
        etapa: 3,
    }
    render() {
        return (
          <div>
            <h2> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <ol>
              <li>Por que você não terminou um curso de graduação?</li>
              <input
                value={this.state.rascunhoInputNome}
                onChange={this.onChangeInputNome}
              />
              <li> Você fez algum curso complementar?</li>
              <input
                value={this.state.rascunhoInputIdade}
                onChange={this.onChangeInputIdade}
              />
            </ol>
          </div>
        );
      }
}

export default Etapa3