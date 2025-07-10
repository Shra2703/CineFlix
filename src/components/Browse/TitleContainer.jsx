import Button from "../../ui/Button";
import { Play } from "lucide-react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

const TitleContainer = ({ title = "", overview, id }) => {
  return (
    <div className="w-1/2 h-full min-h-[80vh] relative z-200 px-10 flex flex-col justify-center text-white gap-4 font-roboto -mt-14 max-lg:-mt-0 max-sm:-mt-7 max-sm:w-[70%]">
      <div className="group">
        <h1 className="font-consent text-7xl cursor-pointer max-sm:text-4xl">
          {title}
        </h1>
        <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden max-sm:max-h-20 max-sm:text-xs">
          {overview}
        </p>
      </div>
      <div className="flex gap-2 max-sm:flex-col w-xs max-sm:hidden">
        <Link to={`/browse/details-movies/${id}`}>
          <Button
            label="Watch Now"
            classname="px-32 bg-white !text-black hover:bg-white/90"
            showIcon={true}
            Icon={<Play />}
          />
        </Link>

        {/* <Button
          label="More Info"
          classname="px-14 !bg-gray-600 hover:!bg-gray-500"
          showIcon={true}
          Icon={<Info />}
        /> */}
      </div>
    </div>
  );
};

export default TitleContainer;
