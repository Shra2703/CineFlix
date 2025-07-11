import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import axiosInstance from "../../../axiosInstance";

// store
import { addMovieVideos } from "../../../redux/slices/movieSlice";
import { setError, clearError } from "../../../redux/slices/errorSlice";

// api endpoint
import { getMovieVideosApi, getTvVideosApi } from "../../../apiEndPointsRTK";
import { useQuery } from "@tanstack/react-query";

const useMovieVideos = (id, type) => {
  const dispatch = useDispatch();
  

  const fetchMovieVideos = async () => {
    try {
      let response = null;
      if (type === "movies") {
        response = await axiosInstance.get(getMovieVideosApi(id));
      } else {
        response = await axiosInstance.get(getTvVideosApi(id));
      }
      const results = response?.data?.results;
      return results;
    } catch (error) {
      dispatch(setError(error.message));
      return [];
    }
  };

  const { data, error, isPending, isSuccess } = useQuery({
    queryKey: ["movieVideos", id],
    queryFn: fetchMovieVideos,
    staleTime: 1000 * 5 * 60,
  });

  useEffect(() => {
    if (error) {
      dispatch(setError(error));
    }
    if (data && isSuccess) {
      dispatch(clearError());
      dispatch(addMovieVideos(data));
    }
  }, [id, data]);

  return { isPending };
};

export default useMovieVideos;
