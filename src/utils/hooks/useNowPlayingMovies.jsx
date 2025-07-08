import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import { API_OPTIONS } from "../../constanst";

// store
import { addNowPlayingMovies } from "../redux/slices/movieSlice";

// api endpoint
import { getNowPlayingMoviesApi } from "../apiEndPoints";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(getNowPlayingMoviesApi(), API_OPTIONS);
    const movies = await data.json();
    console.log("Now Playing Movies: ", movies.results[4].id);
    dispatch(addNowPlayingMovies(movies.results));
  };

  useEffect(() => {
   !nowPlayingMovies &&  getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
