import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../axiosInstance";

// store
import { addNowPlayingMovies } from "../../redux/slices/movieSlice";

// api endpoint
import { getNowPlayingMoviesApi } from "../../apiEndPointsRTK";

const useNowPlayingMovies1 = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const fetchNowPlayingMovies = async () => {
    try {
      const response = await axiosInstance.get(getNowPlayingMoviesApi());
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["nowPlayingMovies"],
    queryFn: fetchNowPlayingMovies,
    enabled: !nowPlayingMovies || nowPlayingMovies.length === 0,
    staleTime: 1000 * 60 * 5
  });

  useEffect(() => {
    if (data) {
      dispatch(addNowPlayingMovies(data));
    }
  }, [data, dispatch]);
};

export default useNowPlayingMovies1;
