import { useSelector } from "react-redux";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

// constants
import { MOVIE_POSTER } from "../../constanst";
import RoundedDivider from "../../ui/RoudedDivide";

const getReleaseYear = (dateStr) => {
  return dateStr.split("T")[0].split("-")[0];
};

const Featurette = ({ feature }) => {
  const details = useSelector((store) => store.movies?.movieDetails);
  if (!details) return;
  const { backdrop_path, overview } = details || {};

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 overflow-y-auto scroll-smooth w-full slider overflow-x-hidden pt-2.5">
        {feature.slice(0,4).map((item, index) => (
          <Link to={`video/${item.key}`} key={index} className="block w-[90%] flex-shrink-0 h-full max-lg:w-full">
            <FeaturetteCard
              item={item}
              imageUrl={backdrop_path}
              overview={overview}
              classname="max-sm:flex-col  max-sm:h-auto"
              imageClass="w-1/2 max-md:w-[70%] max-sm:w-full"
              paraClass="max-sm: w-full max-sm:text-sm"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featurette;

export const FeaturetteCard = ({
  item,
  overview = "",
  imageUrl,
  classname = "flex-row",
  imageClass = "",
  paraClass = "",
}) => {
  return (
    <div
      className={" h-52 bg-black/20 flex px-4 py-3 rounded " + classname}
    >
      <div
        className={
          "h-full rounded-2xl mr-4 relative shadow border border-gray-50 " +
          imageClass
        }
      >
        <img
          src={MOVIE_POSTER + imageUrl}
          alt={item.name}
          className="w-full h-full overflow-hidden rounded-2xl object-cover"
        />
        <Play className="absolute bottom-2 right-2" fill="white" />
      </div>
      <div
        className={"flex flex-col gap-3 mt-3 w-2/3 text-gray-300 " + paraClass}
      >
        <p className="text-3xl font-consent text-white truncate max-sm:text-2xl">{item.name}</p>
        <div className="font-medium uppercase flex items-center">
          <p>{getReleaseYear(item.published_at)}</p>
          <RoundedDivider />
          <p>{item.iso_639_1}</p>
        </div>
        {overview && <p className="-mt-1 line-clamp-2">{overview}</p>}
      </div>
    </div>
  );
};
