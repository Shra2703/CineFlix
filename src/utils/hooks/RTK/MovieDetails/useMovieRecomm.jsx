import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

// constants
import axiosInstance from "../../../axiosInstance";

// store
import { addMovieRecommendations } from "../../../redux/slices/movieSlice";

// api endpoint
import {
  getMovieRecommendationsApi,
  getTvRecommendationsApi,
} from "../../../apiEndPointsRTK";

const useMovieRecommendation = (id, type) => {
  const dispatch = useDispatch();

  const fetchMovieRecommendations = async () => {
    try {
      let response = null;
      if (type === "movies") {
        response = await axiosInstance.get(getMovieRecommendationsApi(id));
      } else {
        response = await axiosInstance.get(getTvRecommendationsApi(id));
      }
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["movieTvRecommendation", id],
    queryFn: fetchMovieRecommendations,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      dispatch(addMovieRecommendations(data));
    }
  }, [id, data, dispatch]);
};

export default useMovieRecommendation;
