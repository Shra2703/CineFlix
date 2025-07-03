import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../constanst";

// store
import { addUpcomingMovies } from "../redux/slices/movieSlice";

// api endpoint
import { getUpcomingMoviesApi } from "../apiEndPoints";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(getUpcomingMoviesApi(), API_OPTIONS);
    const movies = await data.json();
    dispatch(addUpcomingMovies(movies.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
