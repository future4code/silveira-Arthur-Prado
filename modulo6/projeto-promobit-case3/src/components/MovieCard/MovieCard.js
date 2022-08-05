import React from "react";
import { CardStyle, MainContainer } from "./MovieCardStyle";

const MovieCard = ({ movie, onClick }) => {

  return (
    <MainContainer>
      <CardStyle onClick={onClick}>
        {/* <img src={movie.backdrop_path} alt="Poster do filme"/> */}
        {movie.title}
        {movie.release_date}
      </CardStyle>
    </MainContainer>
  );
};

export default MovieCard;
