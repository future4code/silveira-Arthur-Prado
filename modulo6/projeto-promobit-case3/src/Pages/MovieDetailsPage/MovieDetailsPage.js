import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Base_Url } from "../../constants/Base_Url";
import { goBack } from "../../Routes/Coordinator";
import { ButtonStyled, MainContainer, MovieImage } from "./styled";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = () => {
    const url = `${Base_Url}/movie/${id}?api_key=304f38d2697865af31bf9a473a064c42`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const getGenres = genres.map((genre) => {
    return genre.name;
  });

  return (
    <MainContainer>
        
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Capa do filme"
      />
      <ButtonStyled onClick={() => goBack(navigate)}>Voltar</ButtonStyled>
      <h2>{movie.title}</h2>
      <p>
        <b>
          {movie.release_date}(BR) {getGenres[0]}/{getGenres[1]}/{getGenres[2]}/
          {getGenres[3]}
        </b>
      </p>
      <p>
        <b>Avaliação dos usuários:</b> {movie.vote_average}
      </p>
      <p>
        <b>Duração:</b> {movie.runtime}m
      </p>
      <p>
        <b>Sinopse:</b> {movie.overview}
      </p>
    </MainContainer>
  );
};

export default MovieDetailsPage;
