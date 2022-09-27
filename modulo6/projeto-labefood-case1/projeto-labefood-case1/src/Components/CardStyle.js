import styled from "styled-components";

export const ImgStyled = styled.img`
    width: 300px;
    height: 100px;
    border-radius: 10%;
`
export const ParagraphStyled = styled.p`
    margin: 2px;
    color: grey;
`



export const NameStyled = styled.p`
    color: #E86E5A;
    font-family: Roboto, Bold, 16px;
    margin: 2px;
;
`

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
    width: 300px;
    height: 170px;
    box-shadow: 13px 7px 13px 7px rgba(50, 50, 50, 0.22);
    border: solid grey 1px;
    border-radius: 10%;
    justify-content: center;
    align-items: center;
`

export default CardStyle