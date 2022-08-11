import React from "react";
import { CardStyle, PosterStyled, StyledDate, StyledTitle } from "./MovieCardStyle";


const MovieCard = ({ movie, onClick }) => {

  return (
      <CardStyle onClick={onClick}>
        <PosterStyled src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Capa do filme"/> 
        <StyledTitle>{movie.title}</StyledTitle>
        <StyledDate>{movie.release_date}</StyledDate>
      </CardStyle>
  );
};

export default MovieCard;
