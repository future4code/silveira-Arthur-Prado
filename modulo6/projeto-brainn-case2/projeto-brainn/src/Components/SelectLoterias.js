import { BaseURL } from "../Constants/BaseURL";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DiaDeSorte from "../Pages/DiaDeSorte";
import LotoFacil from "../Pages/LotoFacil";
import LotoMania from "../Pages/LotoMania";
import MegaSena from "../Pages/MegaSena";
import Quina from "../Pages/Quina";
import TimeMania from "../Pages/TimeMania";

const SelectLoterias = () => {
  const [loterias, setLoterias] = useState([]);
  const [controleInput, setControleInput] = useState(0);
  const [loteriasConcursos, setLoteriasConcursos] = useState([]);
  const [concurso, setConcurso] = useState({});

  const renderizaPagina = () => {
    switch (controleInput) {
      case 1:
        return <Quina {...concurso} />;
      case 2:
        return <LotoFacil {...concurso} />;
      case 3:
        return <LotoMania {...concurso} />;
      case 4:
        return <TimeMania {...concurso} />;
      case 5:
        return <DiaDeSorte {...concurso} />;
      default:
        return <MegaSena {...concurso} />;
    }
  };

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

  // const renderizaLoterias = loterias.map((item) => {
  //   return <option value={item.id}>{item.nome}</option>;
  // });

  return (
    <div>
      {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={renderizaLoterias}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={"Loterias"} />}

      /> */}
      <div>{renderizaPagina()}</div>
      <div>
        <select value={controleInput} onChange={onChangeSelect}>
          {loterias?.map((loteria, index) => {
            return (
              <option key={index} value={loteria.id}>
                {loteria.nome}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectLoterias;
