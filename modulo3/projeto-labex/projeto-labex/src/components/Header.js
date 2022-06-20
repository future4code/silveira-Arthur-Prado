import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
  background-color: #4CAF50; 
    padding: 10px;
    text-align: center;
    height: 10%;
    
`

const Header = () => {
   
    return (
        <HeaderStyle>
            <h4> Aplicativo Labex. Seu aplicativo de viagens espaciais!</h4>
        </HeaderStyle>
    )
}

export default Header
