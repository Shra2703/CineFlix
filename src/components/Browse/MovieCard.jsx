import { MOVIE_POSTER } from "../../constanst";
// components
import MovieCardHover from "./MovieCardHover";

const MovieCard = ({ movie, index, length }) => {
  const { poster_path, title, name } = movie;

  return (
    <div className="w-48 flex-shrink-0 group relative max-sm:w-36">
      <div className="w-full h-full overflow-hidden rounded-sm">
        <img
          src={MOVIE_POSTER + poster_path}
          alt={title || name}
          className="w-full h-full object-fit overflow-hidden"
        />
      </div>
      <div
        className={`absolute  right-3 w-72 z-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 overflow-visible shadow-2xl shadow-black max-sm:w-56 ${
          index === 0
            ? "top-0 left-0"
            : "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        } ${index === length-1 ? "top-0 right-0" : ""}`}
      >
        <MovieCardHover movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
