import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addMovieVideos } from "../../redux/slices/movieSlice";

// api endpoint
import { getMovieVideosApi, getTvVideosApi } from "../../apiEndPoints";

const useMovieVideos = (id, type) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    let data = null;
    if (type === "movies") {
      data = await fetch(getMovieVideosApi(id), API_OPTIONS);
    } else {
      data = await fetch(getTvVideosApi(id), API_OPTIONS);
    }
    const videos = await data.json();
    dispatch(addMovieVideos(videos.results));
  };

  useEffect(() => {
    getMovieVideos();
  }, [id]);
};

export default useMovieVideos;
