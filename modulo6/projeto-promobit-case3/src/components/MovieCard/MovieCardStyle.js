import styled from 'styled-components'

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    max-height: 320px;
    width: 150px;
    justify-content: space-between;
    :hover {
    cursor: pointer;
  }
`

export const PosterStyled = styled.img`
    width: 150px;
    height: 200px;
`

export const StyledTitle = styled.p`
  margin-block-start: 8px;
  margin-block-end: 0px;
  font-weight: 600;
  font-size: 13px;
`

export const StyledDate = styled.p`
  margin-block-start: 8px;
  margin-block-end: 0px;
  margin-bottom: 16px;
`