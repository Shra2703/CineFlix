// api end points for fetching movies and TV shows from The Movie Database (TMDB)

export const getNowPlayingMoviesApi = () => {
  return "movie/now_playing?page=1&with_origin_country=IN";
};

export const getPopularMoviesApi = () => {
  return "movie/popular";
};
export const getTopRatedMoviesApi = () => {
  return "movie/top_rated";
};
export const getUpcomingMoviesApi = () => {
  return "movie/upcoming";
};

export const getArrivingTodayTvApi = () => {
  return "tv/airing_today";
};

export const getPopularTvApi = () => {
  return "tv/popular";
};

export const getOnTheAirTvApi = () => {
  return "tv/on_the_air";
};

export const getTopRatedTvApi = () => {
  return "tv/top_rated";
};

export const getTrailerVideoApi = (movieId) => {
  return `movie/${movieId}/videos`;
};

// api end point for fetching movie details
export const getMovieDetailsApi = (movieId) => {
  return `movie/${movieId}`;
};

export const getTvDetailsApi = (tvId) => {
  return `tv/${tvId}`;
};

export const getMovieVideosApi = (movieId) => {
  return `movie/${movieId}/videos`;
};

export const getTvVideosApi = (tvId) => {
  return `tv/${tvId}/videos`;
};

export const getMovieRecommendationsApi = (movieId) => {
  return `movie/${movieId}/recommendations`;
};
export const getTvRecommendationsApi = (tvId) => {
  return `tv/${tvId}/recommendations`;
};

export const getMovieSearchApi = (movie) => {
  return `search/collection?query=${movie}&include_adult=false`;
};
