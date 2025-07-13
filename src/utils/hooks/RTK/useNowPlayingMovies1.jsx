import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../axiosInstance";

// store
import { addNowPlayingMovies } from "../../redux/slices/movieSlice";
import { setError, clearError } from "../../redux/slices/errorSlice";

// api endpoint
import { getNowPlayingMoviesApi } from "../../apiEndPointsRTK";

const useNowPlayingMovies1 = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  // const fetchNowPlayingMovies = async () => {
  //   try {
  //     const response = await axiosInstance.get(getNowPlayingMoviesApi());
  //     const results = response?.data?.results;
  //     return results;
  //   } catch (error) {
  //     console.error("❌ API error:", error.message);
  //     return [];
  //   }
  // };

  const fetchNowPlayingMovies1 = async () => {
    const response = await axiosInstance.get(getNowPlayingMoviesApi());
    const results = response?.data?.results;

    if (!results) {
      throw new Error("Movie not found");
    }
    return results;
  };

  const { data, error, isError, isSuccess } = useQuery({
    queryKey: ["nowPlayingMovies"],
    queryFn: fetchNowPlayingMovies1,
    enabled: !nowPlayingMovies || nowPlayingMovies.length === 0,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(clearError());
      dispatch(addNowPlayingMovies(data));
    }
    if (isError && error) {
      dispatch(setError(error.message));
    }
  }, [data, dispatch]);
};

export default useNowPlayingMovies1;
