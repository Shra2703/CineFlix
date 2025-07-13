import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

// constants
import axiosInstance from "../../axiosInstance";

// store
import { setSearchResults } from "../../redux/slices/searchSlice";
import { setError, clearError } from "../../redux/slices/errorSlice";

// api endpoint
import { getMovieSearchApi } from "../../apiEndPointsRTK";

const useSearch = (movie) => {
  const dispatch = useDispatch();
  const [debouncedMovie, setDebouncedMovie] = useState(movie);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedMovie(movie);
    }, 300);

    return () => clearTimeout(timer);
  }, [movie]);

  const fetchMovieSearch = async (query) => {
    try {
      const response = await axiosInstance.get(getMovieSearchApi(query));
      return response?.data?.results ?? [];
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || "Search request failed";
      throw new Error(message);
    }
  };

  const { data, isSuccess, error, isError } = useQuery({
    queryKey: ["search", movie],
    queryFn: () => fetchMovieSearch(debouncedMovie),
    staleTime: 1000 * 60 * 2,
    enabled: !!debouncedMovie,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(clearError());
      dispatch(setSearchResults(data));
    }

    if (isError && error) {
      dispatch(setError(error.message));
    }
  }, [isSuccess, isError, data, error, dispatch]);
};

export default useSearch;
