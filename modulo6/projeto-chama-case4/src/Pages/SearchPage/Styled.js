import styled from "styled-components"

export const ContainerSearch = styled.div`
    display: flex;
    justify-content: center;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImageUser = styled.img`
    margin: 20px 0px;
    width: 200px;
`

export const MainContainer = styled.div`
    margin: 50px;
    text-align: center;
`

export const InputSearch = styled.input`
    margin: 5px;
    border-radius: 5px;;
    height: 40px;
    text-align: center;
`

export const ButtonStyled = styled.button`
    margin: 5px;
    border-radius: 5px;
    height: 40px;
    color: white;
    background-color: black;
    :active {
        cursor: pointer;
        background-color: white;
        color: black;
    }
    :hover {
        cursor: pointer;
    }
`