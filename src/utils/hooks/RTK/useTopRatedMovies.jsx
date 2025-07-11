import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../axiosInstance";

// store
import { addTopRatedMovies } from "../../redux/slices/movieSlice";

// api endpoint
import { getTopRatedMoviesApi } from "../../apiEndPointsRTK";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axiosInstance.get(getTopRatedMoviesApi());
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
    enabled: !topRatedMovies || topRatedMovies.length === 0,
    staleTime: 1000 * 60 * 5
  });

  useEffect(() => {
    if (data) {
      dispatch(addTopRatedMovies(data));
    }
  }, [data, dispatch]);
};

export default useTopRatedMovies;
