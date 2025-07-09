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
import { getMovieDetailsApi, getTvDetailsApi } from "../../apiEndPoints";

const useMovieDetails = (id, type) => {
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    let data = null;
    if (type === "movies") {
      data = await fetch(getMovieDetailsApi(id), API_OPTIONS);
    } else {
      data = await fetch(getTvDetailsApi(id), API_OPTIONS);
    }
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
