// components
import MainContainer from "../components/Browse/MainContainer";
import SecondaryContainer from "../components/Browse/SecondaryContainer";
import Header from "../components/Header";

// hooks
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div className="relative bg-black font-roboto h-full">
      <Header />
      <div className="flex flex-col relative ">
        <MainContainer />
        <SecondaryContainer />
        
      </div>
    </div>
  );
};

export default Browse;
