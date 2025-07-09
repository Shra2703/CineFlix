import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    movieDetails: null,
    movieVideos: null,
    movieRecommendations: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    clearMovieDetails: (state) => {
      state.movieDetails = null;
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },
    clearMovieVideos: (state) => {
      state.movieVideos = null;
    },
    addMovieRecommendations: (state, action) => {
      state.movieRecommendations = action.payload;
    },
    clearMovieRecommendations: (state) => {
      state.movieRecommendations = null;
    }
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addMovieDetails,
  clearMovieDetails,
  addMovieVideos,
  clearMovieVideos,
  addMovieRecommendations,
  clearMovieRecommendations,
} = movieSlice.actions;
