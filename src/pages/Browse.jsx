// components
import MainContainer from "../components/Browse/MainContainer";
import SecondaryContainer from "../components/Browse/SecondaryContainer";
import Header from "../components/Header";

// hooks
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="relative h-screen border border-black">
      <Header />
      <div className="flex flex-col">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
