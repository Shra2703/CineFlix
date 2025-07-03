import { useSelector } from "react-redux";

// hook
import useMovieTrailer from "../../utils/hooks/useMovieTrailer";


const VideoBackground = ({ movieId, title }) => {
  
  const trailer = useSelector(store => store.movies?.trailerVideo)
  useMovieTrailer(movieId);

  return (
    <div className="absolute w-full h-full bg-black/80">
      <iframe
        // width="full"
        // height="315"
        src={`https://www.youtube.com/embed/${trailer?.key}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-full"
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
