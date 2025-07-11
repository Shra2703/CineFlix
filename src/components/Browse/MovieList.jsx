import { ChevronRight } from "lucide-react";

// components
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movieList, type, classname = "pl-10" }) => {
  return (
    <div className={"w-full pb-8 " + classname}>
      <h1 className="font-medium text-2xl mt-5 flex gap-1 items-center">
        {title}
        <span className="mt-1">
          <ChevronRight />
        </span>
      </h1>

      <div className="mt-5 flex overflow-x-auto scroll-smooth gap-4 w-full slider overflow-y-hidden items-center">
        {movieList?.map((movie, index) =>
          type === "movies"
            ? movie?.poster_path &&
              movie?.backdrop_path && (
                <Link to={`/browse/details-movies/${movie.id}`} key={movie.id}>
                  <MovieCard
                    movie={movie}
                    index={index}
                    length={movieList.length}
                  />
                </Link>
              )
            : movie?.poster_path &&
              movie?.backdrop_path && (
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
