import Button from "../../ui/Button";
import { Play } from "lucide-react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

const TitleContainer = ({ title = "", overview, id }) => {
  return (
    <div className="w-1/2 h-full min-h-[80vh] relative z-200 px-10 flex flex-col justify-center text-white gap-4 font-roboto -mt-14 max-lg:-mt-0 max-sm:-mt-7 max-md:w-[80%]">
      <div className="group">
        <h1 className="font-consent text-7xl cursor-pointer max-sm:text-4xl max-md:text-nowrap">
          {title}
        </h1>
        <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden max-sm:text-xs max-md:line-clamp-3">
          {overview}
        </p>
      </div>
      <div className="flex gap-2 max-sm:flex-col w-xs max-sm:w-40 border border-black">
        <Link to={`/browse/details-movies/${id}`}>
          <Button
            label="Watch Now"
            classname="px-32 bg-white !text-black hover:bg-white/90 max-sm:text-xs"
            showIcon={true}
            Icon={<Play />}
          />
        </Link>
      </div>
    </div>
  );
};

export default TitleContainer;
