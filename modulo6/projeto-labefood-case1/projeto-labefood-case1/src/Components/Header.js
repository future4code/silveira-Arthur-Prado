import styled from "styled-components";
import React from "react";
import { goBack } from "../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

const HeaderStyle = styled.div`
    height: 40px;
    width: 100%;
    border-bottom: solid 1px black;
`
const ArrowStyle = styled.p`
   display: flex;
   align-items: center;
   height: 10px;
`

const Header = () => {
    const navigate = useNavigate()

    return(
        <HeaderStyle>
           <ArrowStyle onClick={() => goBack(navigate)}>ᐸ</ArrowStyle> 
        </HeaderStyle>
    )
}

export default Header