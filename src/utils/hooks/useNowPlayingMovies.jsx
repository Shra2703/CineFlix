import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../constanst";

// store
import { addNowPlayingMovies } from "../redux/slices/movieSlice";

// api endpoint
import { getNowPlayingMoviesApi } from "../apiEndPoints";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(getNowPlayingMoviesApi(), API_OPTIONS);
    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
