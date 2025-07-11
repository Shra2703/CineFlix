import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

// constants
import axiosInstance from "../../../axiosInstance";

// store
import {
  addMovieDetails,
  clearMovieDetails,
} from "../../../redux/slices/movieSlice";

import { setError, clearError } from "../../../redux/slices/errorSlice";

// api endpoint
import { getMovieDetailsApi, getTvDetailsApi } from "../../../apiEndPointsRTK";

const useMovieDetails = (id, type) => {
  const dispatch = useDispatch();

  const fetchMovieDetails = async () => {
    try {
      let response = null;
      if (type === "movies") {
        response = await axiosInstance.get(getMovieDetailsApi(id));
      } else {
        response = await axiosInstance.get(getTvDetailsApi(id));
      }
      const results = response?.data;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data, error, isPending } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: fetchMovieDetails,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (error) {
      dispatch(setError(error.message || "Something went wrong"));
    }
    if (data) {
      dispatch(clearMovieDetails());
      dispatch(clearError());
      dispatch(addMovieDetails(data));
    }
  }, [data, id]);

  return { isPending };
};

export default useMovieDetails;
