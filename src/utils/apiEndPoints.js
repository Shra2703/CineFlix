// api end points for fetching movies and TV shows from The Movie Database (TMDB)

export const getNowPlayingMoviesApi = () => {
  return "https://api.themoviedb.org/3/movie/now_playing?page=1";
};

export const getPopularMoviesApi = () => {
  return "https://api.themoviedb.org/3/movie/popular";
};
export const getTopRatedMoviesApi = () => {
  return "https://api.themoviedb.org/3/movie/top_rated";
};
export const getUpcomingMoviesApi = () => {
  return "https://api.themoviedb.org/3/movie/upcoming";
};

export const getArrivingTodayTvApi = () => {
  return "https://api.themoviedb.org/3/tv/airing_today";
};

export const getPopularTvApi = () => {
  return "https://api.themoviedb.org/3/tv/popular";
};

export const getOnTheAirTvApi = () => {
  return "https://api.themoviedb.org/3/tv/on_the_air";
};

export const getTopRatedTvApi = () => {
  return "https://api.themoviedb.org/3/tv/top_rated";
};

export const getTrailerVideoApi = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/videos`;
};

// api end point for fetching movie details
export const getMovieDetailsApi = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}`;
};

export const getTvDetailsApi = (tvId) => {
  return `https://api.themoviedb.org/3/tv/${tvId}`;
};