import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  background-color: #4CAF50; 
    padding: 10px;
    text-align: center;
    height: 10%;
    
`

const Footer = () => {
   
    return (
        <FooterStyle>
            <p> Aqui você encontra viagens para todo o sistema solar! Aproveite! </p>
        </FooterStyle>
    )
}

export default Footer
