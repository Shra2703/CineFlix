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
    console.log(movies.results);
    dispatch(addNowPlayingMovies(movies.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return;
};

export default useNowPlayingMovies;
