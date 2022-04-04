import React from "react";
import styled from "styled-components";

class Etapa1 extends React.Component {
    state = {
        informacoes: [
          {  nome: "",
            idade: "",
            email: "",
            escolaridade: "",
    }
],
}


  render () {
    return (
        <div>
            <h1> ETAPA 1 - DADOS GERAIS </h1>
            <ol>
                <li>Qual o Seu Nome?</li>
                <input
                  
                />
                <li>Qual a Sua Idade?</li>
                <input
                   
                />
                <li>Qual o Seu Email?</li>
                <input
    
                />
                <li>Qual a Sua Escolaridade?</li>
                <select>
                    <option value="Ensino Médio Incompleto">Ensino médio incompleto</option>
                    <option value="Ensino Médio Completo">Ensino médio completo</option>
                    <option value="Ensino Superior Incompleto"> Ensino superior incompleto </option>
                    <option value="Ensino Superior Completo"> Ensino superior completo</option>
                </select>
            </ol>
        </div>
    )
    }
  }

export default Etapa1