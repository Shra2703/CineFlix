import { MOVIE_POSTER } from "../../constanst";
const MovieCard = ({ movie }) => {

   const {poster_path, title} = movie; 
  return (
    <div className="w-56 flex-shrink-0">
      <div className="w-full h-full">
        <img
          src={MOVIE_POSTER + poster_path}
          alt={title}
          className="w-full h-full object-fit"
        />
      </div>
    </div>
  );
};

export default MovieCard;
