import { useSelector } from "react-redux";
// components
import DescriptionContainer from "./DescriptionContainer";
import ImageBackground from "./ImageBackground";

const MainDetailsContainer = () => {
  const details = useSelector((store) => store.movies?.movieDetails);
  if (details?.success === false) return;
  return (
    <main className="w-full text-white h-screen min-h-[80vh] relative max-md:min-h-[60vh] max-md:h-[60vh]">
      <ImageBackground />
      <DescriptionContainer />
    </main>
  );
};

export default MainDetailsContainer;
