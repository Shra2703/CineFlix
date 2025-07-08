import { useSelector } from "react-redux";

// constants
import { MOVIE_POSTER_LARGE } from "../../constanst";

const ImageBackground = () => {
  const details = useSelector((store) => store.movies?.movieDetails);
  const { backdrop_path } = details || {};

  return (
    <div className="absolute w-full h-full">
      <img
        src={MOVIE_POSTER_LARGE + backdrop_path}
        alt={""}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

    </div>
  );
};

export default ImageBackground;
