import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../constanst";

// store
import { setSearchResults } from "../redux/slices/searchSlice";

// api endpoint
import { getMovieSearchApi } from "../apiEndPoints";

const useSearch = (movie) => {
  const dispatch = useDispatch();

  const getMovieSearch = async () => {
    const data = await fetch(getMovieSearchApi(movie), API_OPTIONS);
    const searchData = await data.json();
    console.log(searchData)
    dispatch(setSearchResults(searchData.results));
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
     movie && getMovieSearch();
    }, 200); 

    return () => clearTimeout(delayDebounce);
  }, [movie]);
};

export default useSearch;
