import { useSelector } from "react-redux";

// hook
import useMovieTrailer from "../../utils/hooks/useMovieTrailer";

const VideoBackground = ({ movieId, title }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="absolute w-full h-full">
      <iframe
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer?.key}`}
        title={title}
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-full aspect-video"
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 pointer-events-none"></div>
    </div>
  );
};

export default VideoBackground;
