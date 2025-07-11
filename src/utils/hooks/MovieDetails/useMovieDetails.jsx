import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import {
  addMovieDetails,
  clearMovieDetails,
} from "../../redux/slices/movieSlice";
import { setError, clearError } from "../../redux/slices/errorSlice";


// api endpoint
import { getMovieDetailsApi, getTvDetailsApi } from "../../apiEndPoints";

const useMovieDetails = (id, type) => {
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    try {
      let response;
      if (type === "movies") {
        response = await fetch(getMovieDetailsApi(id), API_OPTIONS);
      } else {
        response = await fetch(getTvDetailsApi(id), API_OPTIONS);
      }

      if (!response.ok) {
        throw new Error(
          `Failed to fetch details: ${response.status} ${response.statusText}`
        );
      }

      const details = await response.json();
      if (details) {
        dispatch(addMovieDetails(details));
      } else {
        console.warn("No movie/TV details found.");
      }
    } catch (error) {
      // console.error("Error fetching movie/TV details:", error.message);
      // Optionally dispatch an error action
      dispatch(setError(error.message));
    }
  };

  useEffect(() => {
    dispatch(clearMovieDetails());
    dispatch(clearError())
    getMovieDetails();
  }, [id]);
};

export default useMovieDetails;
