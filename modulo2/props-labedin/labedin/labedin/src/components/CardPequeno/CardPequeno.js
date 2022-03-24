import React from "react";
import styled from 'styled-components'

const ImagemCardPequeno = styled.img`
    width: 5%;
    margin: 10px;
`

const DadosCardPequeno = styled.div `
    display: flex;
    min-height: 40px;
    border: solid 2px;
    align-items: center;
    margin-top: 10px;
`

function CardPequeno(props) {
  return (
    <DadosCardPequeno>
        <ImagemCardPequeno src={ props.imagem }/>
        <div>
            <p>
                <strong>{ props.etiqueta }:</strong> 
                { props.texto }
            </p>

        </div>
    </DadosCardPequeno>
  );
}

export default CardPequeno;

