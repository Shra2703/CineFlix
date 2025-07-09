import { ChevronRight } from "lucide-react";

// components
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movieList, type }) => {
  return (
    <div className="pl-10 w-full pb-8">
      <h1 className="font-medium text-2xl mt-5 flex gap-1 items-center">
        {title}
        <span className="mt-1">
          <ChevronRight />
        </span>
      </h1>

      <div className="mt-5 flex overflow-x-auto scroll-smooth gap-4 w-full slider overflow-y-hidden">
        {movieList?.map((movie, index) =>
          type === "movies" ? (
            <Link to={`/browse/details-movies/${movie.id}`} key={movie.id}>
              <MovieCard
                movie={movie}
                index={index}
                length={movieList.length}
              />
            </Link>
          ) : (
            <Link to={`/browse/details-shows/${movie.id}`} key={movie.id}>
              <MovieCard
                movie={movie}
                index={index}
                length={movieList.length}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default MovieList;
