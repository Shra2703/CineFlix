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
  // const getMovieVideos = async () => {
  //   try {
  //     let response;
  //     if (type === "movies") {
  //       response = await fetch(getMovieVideosApi(id), API_OPTIONS);
  //     } else {
  //       response = await fetch(getTvVideosApi(id), API_OPTIONS);
  //     }

  //     if (!response.ok) {
  //       throw new Error(
  //         `Failed to fetch videos: ${response.status} ${response.statusText}`
  //       );
  //     }

  //     const videos = await response.json();
  //     if (videos?.results) {
  //       dispatch(addMovieVideos(videos.results));
  //     } else {
  //       console.warn("No video results found.");
  //     }
  //   } catch (error) {
  //     // console.error("Error fetching movie/TV videos:", error.message);
  //     dispatch(setError(error.message));
  //   }
  // };

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

  const { data, error } = useQuery({
    queryKey: ["movieVideos", id],
    queryFn: fetchMovieVideos,
    staleTime: 1000 * 5 * 60,
  });

  useEffect(() => {
    if (error) {
      setError(error);
    }
    if (data) {
      dispatch(clearError());
      dispatch(addMovieVideos(data));
    }
  }, [id, data]);
};

export default useMovieVideos;
