import { BaseURL } from "../Constants/BaseURL";
import Autocomplete from "@mui/material/Autocomplete";
import  TextField  from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SelectLoterias = () => {
  const [loterias, setLoterias] = useState([{}])

  const pegaLoterias = () => {
    const url = `${BaseURL}/loterias`;


    axios
      .get(url)
      .then((response) => {
        setLoterias(response.data)
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    pegaLoterias()
  }, [])

  const renderizaLoterias = loterias.map((item) => {
    return [item.nome]
  })

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={renderizaLoterias}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={"Loterias"} />}
      />
    </div>
  );
};


export default SelectLoterias