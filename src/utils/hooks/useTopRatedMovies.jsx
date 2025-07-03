import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../constanst";

// store
import { addTopRatedMovies } from "../redux/slices/movieSlice";

// api endpoint
import { getTopRatedMoviesApi } from "../apiEndPoints";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(getTopRatedMoviesApi(), API_OPTIONS);
    const movies = await data.json();
    dispatch(addTopRatedMovies(movies.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
