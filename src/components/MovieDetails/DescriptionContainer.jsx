import { useSelector } from "react-redux";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

// components
import Button from "../../ui/Button";
import RoundedDivider from "../../ui/RoudedDivide";

const DescriptionContainer = () => {
  const details = useSelector((store) => store.movies?.movieDetails);
  const videos = useSelector((store) => store.movies?.movieVideos);
  if (!details) return;

  const {
    original_title,
    genres,
    release_date,
    overview,
    spoken_languages,
    title,
    origin_country,
    original_name,
    first_air_date,
    name,
  } = details || {};
  return (
    <div className="w-[60%] h-full relative z-200 px-10 flex flex-col justify-center text-white gap-4 font-roboto max-md:w-full max-md:gap-2 max-md:px-3">
      <h1 className="font-consent text-6xl cursor-pointer max-sm:text-4xl ">
        {title || original_title || name || original_name}
      </h1>
      <div className="flex gap-0 font-medium text-xl items-center max-md:text-xs">
        {release_date?.split("-")[0] || first_air_date?.split("-")[0]}
        <RoundedDivider />

        <Languages languages={spoken_languages} />

        <RoundedDivider />
        <Countries country={origin_country} />
      </div>
      <p className="text-justify max-md:text-xs max-md:line-clamp-3">{overview}</p>
      <Genres genres={genres} />

      {videos?.length > 0 && (
        <Link to={`video/${videos[0].key}`}>
          <Button
            label="Watch Now"
            showIcon={true}
            Icon={<Play />}
            classname="mt-4 bg-white !text-black hover:bg-white/70 !w-1/2 max-md:text-sm max-md:!w-1/3 max-md:mt-2"
          />
        </Link>
      )}
    </div>
  );
};

export default DescriptionContainer;

const Layout = ({ children }) => {
  return (
    <div className="flex gap-0 font-bold text-base items-center">
      {children}
    </div>
  );
};

const Countries = ({ country }) => {
  return (
    <Layout>
      {country?.map((c, index) => (
        <span key={index}>
          {c}
          {index != country.length - 1 && <span className="mx-3">|</span>}
        </span>
      ))}
    </Layout>
  );
};

const Genres = ({ genres }) => {
  return (
    <Layout>
      {genres?.map((genre, index) => (
        <span key={genre.id} className="text-nowrap max-md:text-xs">
          {genre.name}
          {index != genres.length - 1 && <span className="mx-3">|</span>}
        </span>
      ))}
    </Layout>
  );
};

const Languages = ({ languages }) => {
  return (
    <Layout>
      {languages?.map((lan, index) => (
        <span key={index}>
          {lan.english_name}
          {index != languages.length - 1 && <span className="mx-3">|</span>}
        </span>
      ))}
    </Layout>
  );
};
