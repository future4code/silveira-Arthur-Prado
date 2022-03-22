import React from 'react';

import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'

const SecaoDaPagina = styled.div `
   width: 40vw;
   margin: 10px 0;
`

const TituloDaSecao = styled.h2 `
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

const Aplicativo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`


function App() {
  return (
    <Aplicativo>
      <SecaoDaPagina>
        <TituloDaSecao>Dados pessoais</TituloDaSecao>
        <CardGrande 
          imagem="/img/eu.jpg" 
          nome="Arthur Branco Martins Prado" 
          descricao="Oi, eu sou o Arthur. Sou aluno da Labenu para me tornar um desenvolvedor web Full Stack. Adoro jogos/esportes em equipe e uma boa série pra assistir." 
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />

      </SecaoDaPagina>

      <SecaoDaPagina>
        <CardPequeno
            imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
            etiqueta="Email"
            texto= "labenucode@gmail.com"
          />
    
          <CardPequeno
            imagem="https://i.pinimg.com/564x/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg"
            etiqueta="Endereço"
            texto="Rua Labenu"
          />
      </SecaoDaPagina>

      <SecaoDaPagina>
        <TituloDaSecao>Experiências profissionais</TituloDaSecao>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Pomar" 
          descricao="Experiência com transcrição de fitas." 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="Brain.wp" 
          descricao="Pequena experiência em WordPress." 
        />
      </SecaoDaPagina>

      <SecaoDaPagina>
        <TituloDaSecao>Minhas redes sociais</TituloDaSecao>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </SecaoDaPagina>
    </Aplicativo>
  );
}

export default App;
