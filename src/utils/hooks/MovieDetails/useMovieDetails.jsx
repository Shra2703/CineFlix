import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import {
  addMovieDetails,
  clearMovieDetails,
} from "../../redux/slices/movieSlice";

// api endpoint
import { getMovieDetailsApi } from "../../apiEndPoints";

const useMovieDetails = (id) => {
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    const data = await fetch(getMovieDetailsApi(id), API_OPTIONS);
    const details = await data.json();
    console.log(details);
    dispatch(addMovieDetails(details));
  };

  useEffect(() => {
    dispatch(clearMovieDetails());
    getMovieDetails();
  }, []);
};

export default useMovieDetails;
