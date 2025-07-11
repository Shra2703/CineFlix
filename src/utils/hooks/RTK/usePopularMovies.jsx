import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../axiosInstance";

// store
import { addPopularMovies } from "../../redux/slices/movieSlice";

// api endpoint
import { getPopularMoviesApi } from "../../apiEndPointsRTK";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (store) => store.movies?.popularMovies
  );

  const fetchPopularMovies = async () => {
    try {
      const response = await axiosInstance.get(getPopularMoviesApi());
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
    enabled: !popularMovies || popularMovies.length === 0,
    staleTime: 1000 * 60 * 5
  });

  useEffect(() => {
    if (data) {
      dispatch(addPopularMovies(data));
    }
  }, [data, dispatch]);
};

export default usePopularMovies;
