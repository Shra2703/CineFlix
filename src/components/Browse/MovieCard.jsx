import { MOVIE_POSTER } from "../../constanst";
// components
import MovieCardHover from "./MovieCardHover";

const MovieCard = ({ movie }) => {
  const { poster_path, title, name } = movie;

  return (
    <div className="w-48 flex-shrink-0 group relative">
      <div className="w-full h-full overflow-hidden rounded-sm">
        <img
          src={MOVIE_POSTER + poster_path}
          alt={title || name}
          className="w-full h-full object-fit overflow-hidden"
        />
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-3 w-72 z-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 overflow-visible shadow-2xl shadow-black">
        <MovieCardHover movie={movie} />
      </div>

    </div>
  );
};

export default MovieCard;
