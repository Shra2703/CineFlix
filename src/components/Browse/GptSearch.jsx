import { BACKGROUND_IMG_URL } from "../../constanst";

// components
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center font-roboto"
      style={{ backgroundImage: `url(${BACKGROUND_IMG_URL})` }}
    >
      <div className="w-full h-full bg-black/50 absolute top-0 left-0">
       <GptSearchBar />
      </div>
    </div>
  );
};

export default GptSearch;
