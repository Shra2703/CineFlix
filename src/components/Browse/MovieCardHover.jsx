import { MOVIE_POSTER } from "../../constanst";


const MovieCardHover = ({ movie }) => {
  const { title, overview, backdrop_path, name, release_date, first_air_date } =
    movie;

  const getYearFromDate = (dateStr) => {
    return dateStr.split("-")[0];
  };
  return (
    <div className="w-72 h-72 flex-shrink-0 bg-gray-800 rounded-lg border">
      <div className="w-full h-8/12 overflow-hidden rounded-t-lg relative">
        <img
          src={MOVIE_POSTER + backdrop_path}
          alt={title || name}
          className="w-full h-full object-cover overflow-hidden"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/60 to-black w-full overflow-hidden right-0  object-cover h-1/2"></div>
        <div
          className="absolute bottom-2 left-3 text-white w-full text-xl overflow-hidden right-0 font-consent truncate"
          style={{ wordSpacing: "3px" }}
        >
          {title || name}
        </div>
      </div>
      <div className="h-1/2 pt-2 px-3 text-base">
        <p className=" font-medium">
          {getYearFromDate(release_date || first_air_date)}
        </p>
        <p
          className="line-clamp-3 mt-2 text-gray-400 text-xs"
          style={{ wordSpacing: "5px" }}
        >
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCardHover
