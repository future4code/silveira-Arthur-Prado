export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToMovieDetailsPage = (navigate, id) => {
    navigate(`/movie/${id}`)
}