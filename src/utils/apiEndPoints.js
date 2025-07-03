export const getNowPlayingMoviesApi = () => {
    return "https://api.themoviedb.org/3/movie/now_playing?page=1"
}

export const getPopularMoviesApi = () => {
    return "https://api.themoviedb.org/3/movie/popular"
}
export const getTopRatedMoviesApi = () => {
    return "https://api.themoviedb.org/3/movie/top_rated"
}
export const getUpcomingMoviesApi = () => {
    return "https://api.themoviedb.org/3/movie/upcoming"
}

export const getTrailerVideoApi = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/videos`
}