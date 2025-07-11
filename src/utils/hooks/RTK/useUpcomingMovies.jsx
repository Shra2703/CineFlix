import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../axiosInstance";

// store
import { addUpcomingMovies } from "../../redux/slices/movieSlice";

// api endpoint
import { getUpcomingMoviesApi } from "../../apiEndPointsRTK";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  const fetchUpcomingMovies = async () => {
    try {
      const response = await axiosInstance.get(getUpcomingMoviesApi());
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: fetchUpcomingMovies,
    enabled: !upcomingMovies || upcomingMovies.length === 0,
    staleTime: 1000 * 60 * 5
  });

  useEffect(() => {
    if (data) {
      dispatch(addUpcomingMovies(data));
    }
  }, [data, dispatch]);
};

export default useUpcomingMovies;
