import { ChevronRight } from "lucide-react";

// components
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="pl-10 w-full pb-8">
      <h1 className="font-medium text-2xl mt-5 flex gap-1 items-center">
        {title}
        <span className="mt-1">
          <ChevronRight />
        </span>
      </h1>

       <div className="mt-5 flex overflow-x-auto scroll-smooth gap-4 w-full slider overflow-y-hidden">
        {movieList?.map((movie, index) => (
          <MovieCard movie={movie} key={movie.id} index = {index} length = {movieList.length}/>
        ))}
      </div> 
    </div>
  );
};

export default MovieList;
