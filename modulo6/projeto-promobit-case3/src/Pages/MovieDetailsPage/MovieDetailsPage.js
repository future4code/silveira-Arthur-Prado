import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Base_Url } from "../../constants/Base_Url";


const MovieDetailsPage = () => {
    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getMovieDetails();
    }, [])
    
    const getMovieDetails = () => {
        const url = `${Base_Url}/movie/${id}?api_key=304f38d2697865af31bf9a473a064c42`

        axios.get(url)
        .then((response) => {
            console.log(response.data.genres)
            setMovie(response.data)
            setGenres(response.data.genres)
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    const getGenres = genres.map((genre) => {
        return genre.name
    })

  
  
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Capa do filme"/>
            {movie.title}
            <p>{movie.release_date}(BR)</p>
            {getGenres}
            <p>{movie.runtime}m</p>
            {movie.vote_average}
            <p>{movie.overview}</p>
        </div>
    )
}

export default MovieDetailsPage