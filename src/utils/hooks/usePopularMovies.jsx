import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import { API_OPTIONS } from "../../constanst";

// store
import { addPopularMovies } from "../redux/slices/movieSlice";

// api endpoint
import { getPopularMoviesApi } from "../apiEndPoints";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(getPopularMoviesApi(), API_OPTIONS);
    const movies = await data.json();
    dispatch(addPopularMovies(movies.results));
  };

  useEffect(() => {
    popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
