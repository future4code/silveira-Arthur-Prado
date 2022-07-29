import { BaseURL } from "./Constants/BaseURL";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectLoterias from "./Components/SelectLoterias";
import styled from 'styled-components'

const SelectStyled = styled.select`
  border: none;
  border-radius: 5px;
  margin: 50px;
  width: 150px;
  height: 30px;
  text-align: center;
`
const OptionStyled = styled.option`
  margin-right: 5px;
`

const App = () => {
  const [loterias, setLoterias] = useState([]);
  const [controleInput, setControleInput] = useState(0);
  const [loteriasConcursos, setLoteriasConcursos] = useState([]);
  const [concurso, setConcurso] = useState({numeros: []});

  const pegaLoterias = () => {
    const url = `${BaseURL}/loterias`;
    axios
      .get(url)
      .then((response) => {
        setLoterias(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const pegaConcursos = () => {
    const url = `${BaseURL}/loterias-concursos`;
    axios
      .get(url)
      .then((response) => {
        setLoteriasConcursos(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const pegaConcursoPorId = () => {
    // controleInput é 0 == estou na Mega Sena
    // preciso buscar no array de concursos usando o valor do controle input que é o tipo de sorteio que eu selecionei.
    const { concursoId } = loteriasConcursos?.find((lc) => {
      return lc.loteriaId === controleInput;
    });
    const url = `${BaseURL}/concursos/${concursoId}`;
    axios
      .get(url)
      .then((response) => {
        setConcurso(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    pegaLoterias();
    pegaConcursos();
  }, []);
 
  useEffect(() => {
   if(controleInput > -1 && loteriasConcursos.length) {
    pegaConcursoPorId();
   }
  }, [loteriasConcursos, controleInput]);

  const onChangeSelect = (event) => {
    setControleInput(Number(event.target.value));
  };


  return (
    <div>
      <SelectLoterias {...concurso} loterias={loterias}>
      <SelectStyled value={controleInput} onChange={onChangeSelect}>
          {loterias?.map((loteria, index) => {
            return (
              <OptionStyled key={index} value={loteria.id}>
                {loteria.nome.toUpperCase()}
              </OptionStyled>
            );
          })}
        </SelectStyled>
      </SelectLoterias>
    </div>
  );
};

export default App;
