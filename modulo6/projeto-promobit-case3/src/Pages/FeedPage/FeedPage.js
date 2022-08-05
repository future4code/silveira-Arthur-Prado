import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Base_Url } from "../../constants/Base_Url";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useNavigate, useParams } from "react-router-dom";
import { goToMovieDetailsPage } from "../../Routes/Coordinator";

const FeedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getMovies();
  }, [page]);

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const getMovies = () => {
    const url = `${Base_Url}/movie/popular?api_key=304f38d2697865af31bf9a473a064c42&page=${page}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

   const onClickGoToMovieDetails = (id) => {
        goToMovieDetailsPage(navigate, id)
   }

  const mappedMovies = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} onClick={() => onClickGoToMovieDetails(movie.id)} />;
  });

  const pageButtons = Array.from(Array(5)).map((_, index) => {
        const initialPage = Math.min(496, page)
        const buttonIndex = initialPage + index
        return (
          <button
            disabled={buttonIndex === page}
            onClick={() => changePage(buttonIndex)}
            key={buttonIndex}
          >
            {buttonIndex}
          </button>
        );
      })


  return (
    <div>
      Feed
      {mappedMovies}
      {page !== 1 && (
        <>
          <button onClick={() => changePage(1)}> Primeira </button>
          <button onClick={() => changePage(page - 1)}> &#60; </button>
        </>
      )}
      {pageButtons}
      {page !== 500 && ( 
        <>
          <button onClick={() => changePage(page + 1)}> &#62; </button>
          <button onClick={() => changePage(500)}> Última </button>
        </>
      )}
    </div>
  );
};

export default FeedPage;
