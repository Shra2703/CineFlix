import Button from "../../ui/Button";
import { Play } from "lucide-react";
import { Info } from "lucide-react";

const TitleContainer = ({title = "Something", overview}) => {
  return (
    <div className="w-1/3 h-full min-h-[80vh] relative z-200 px-10 flex flex-col justify-center text-white gap-4 font-roboto">
      <h1 className="font-consent text-7xl mt-14">{title}</h1>
      <p>
        {overview}
      </p>
      <div className="flex gap-2 w-full">
        <Button
          label="Play"
          classname="px-14 bg-white !text-black hover:bg-white/90"
          showIcon={true}
          Icon={<Play />}
        />
        <Button
          label="More Info"
          classname="px-14 !bg-gray-600 hover:!bg-gray-500"
          showIcon={true}
          Icon={<Info />}
        />
      </div>
    </div>
  );
};

export default TitleContainer;
