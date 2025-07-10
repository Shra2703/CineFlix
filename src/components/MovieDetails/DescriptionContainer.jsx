import { useSelector } from "react-redux";
import { Play } from "lucide-react";

// components
import Button from "../../ui/Button";
import RoundedDivider from "../../ui/RoudedDivide";

const DescriptionContainer = () => {
  const details = useSelector((store) => store.movies?.movieDetails);
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
    <div className="w-1/3 h-full relative z-200 px-10 flex flex-col justify-center text-white gap-4 font-roboto">
      <h1 className="font-consent text-6xl cursor-pointer max-sm:text-4xl text-nowrap">
        {title || original_title || name || original_name}
      </h1>
      <div className="flex gap-0 font-medium text-xl items-center">
        {release_date?.split("-")[0] || first_air_date?.split("-")[0]}
        <RoundedDivider />

        <Languages languages={spoken_languages} />

        <RoundedDivider />
        <Countries country={origin_country} />
      </div>
      <p className="text-justify">{overview}</p>
      <Genres genres={genres} />

      <Button
        label="Watch Now"
        showIcon={true}
        Icon={<Play />}
        classname="mt-4 bg-white !text-black hover:bg-white/70"
      />
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
        <span key={genre.id} className="text-nowrap">
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
