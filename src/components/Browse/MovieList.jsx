import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

// components

const MovieList = ({ title, movieList }) => {

  return (
    <div className="pl-10 w-full">
      <h1 className="font-medium text-2xl mt-5 flex gap-1 items-center">
        {title}{" "}
        <span className="mt-1">
          <ChevronRight />
        </span>
      </h1>

      <div className="mt-5 flex overflow-x-auto scroll-smooth gap-6 w-full slider">
        {movieList?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
