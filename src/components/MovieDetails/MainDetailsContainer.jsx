// components
import DescriptionContainer from "./DescriptionContainer";
import ImageBackground from "./ImageBackground";

const MainDetailsContainer = () => {
  return (
    <main className="w-full text-white h-screen min-h-[80vh] relative max-sm:min-h-[60vh] max-sm:h-[60vh]">
      <ImageBackground />
      <DescriptionContainer />
    </main>
  );
};

export default MainDetailsContainer;
