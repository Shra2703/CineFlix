import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addMovieVideos } from "../../redux/slices/movieSlice";
import { setError, clearError } from "../../redux/slices/errorSlice";

// api endpoint
import { getMovieVideosApi, getTvVideosApi } from "../../apiEndPoints";

const useMovieVideos = (id, type) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      let response;
      if (type === "movies") {
        response = await fetch(getMovieVideosApi(id), API_OPTIONS);
      } else {
        response = await fetch(getTvVideosApi(id), API_OPTIONS);
      }

      if (!response.ok) {
        throw new Error(
          `Failed to fetch videos: ${response.status} ${response.statusText}`
        );
      }

      const videos = await response.json();
      if (videos?.results) {
        dispatch(addMovieVideos(videos.results));
      } else {
        console.warn("No video results found.");
      }
    } catch (error) {
      // console.error("Error fetching movie/TV videos:", error.message);
      dispatch(setError(error.message));
    }
  };

  useEffect(() => {
    dispatch(clearError())
    getMovieVideos();
  }, [id]);
};

export default useMovieVideos;
