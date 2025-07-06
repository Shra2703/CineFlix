import { useState } from "react";
import { useSelector } from "react-redux";
import { HeadphoneOff } from "lucide-react";
import { Headphones } from "lucide-react";

// hook
import useMovieTrailer from "../../utils/hooks/useMovieTrailer";

const VideoBackground = ({ movieId, title }) => {
  const [mute, setMute] = useState(1);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  const handleMic = () => {
    if (mute) setMute(0);
    else setMute(1);
  };

  return (
    <div className="absolute w-full h-full">
      <iframe
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=${mute}&controls=0&loop=1&playlist=${trailer?.key}`}
        title={title}
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-full aspect-video"
      ></iframe>
      {/* <div><Headphones /></div> */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none">
      </div>
        <span
          className="z-1000 absolute top-[60%] right-[10%] cursor-pointer"
          onClick={handleMic}
        >
          {!mute ? <Headphones /> : <HeadphoneOff />}
        </span>
    </div>
  );
};

export default VideoBackground;
