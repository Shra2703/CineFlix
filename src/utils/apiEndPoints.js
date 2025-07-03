export const getNowPlayingMoviesApi = () => {
    return "https://api.themoviedb.org/3/movie/now_playing?page=1"
}

export const getTrailerVideoApi = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/videos`
}