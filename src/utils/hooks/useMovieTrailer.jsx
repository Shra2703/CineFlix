import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import { API_OPTIONS } from "../../constanst";
// api end point
import { getTrailerVideoApi } from "../apiEndPoints";

// redux store
import { addTrailerVideo } from "../redux/slices/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getTrailerFromId = async () => {
    const data = await fetch(getTrailerVideoApi(movieId), API_OPTIONS);
    const movieVideos = await data.json();

    const filterTrailers = movieVideos.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : movieVideos[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
  !trailerVideo &&  getTrailerFromId();
  }, []);
};

export default useMovieTrailer;
