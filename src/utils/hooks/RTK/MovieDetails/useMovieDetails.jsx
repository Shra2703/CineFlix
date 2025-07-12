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

  useEffect(() => {
    dispatch(clearMovieDetails());
  }, [id]);

  const fetchMovieDetails = async () => {
    let response;
    if (type === "movies") {
      response = await axiosInstance.get(getMovieDetailsApi(id));
    } else {
      response = await axiosInstance.get(getTvDetailsApi(id));
    }

    const results = response?.data;
    if (!results) {
      throw new Error("Movie/TV details not found");
    }

    return results;
  };

  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: fetchMovieDetails,
    staleTime: 1000 * 60 * 2,
    enabled: !!id,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(clearError());
      dispatch(addMovieDetails(data));
    }

    if (isError && error) {
      dispatch(setError(error.message));
    }
  }, [isSuccess, isError, data, error, dispatch]);

  return {
    isPending,
    isError,
    error,
  };
};

export default useMovieDetails;
