
// components
import MainContainer from "../components/Browse/MainContainer";
import SecondaryContainer from "../components/Browse/SecondaryContainer";

// hooks
import useNowPlayingMovies1 from "../utils/hooks/RTK/useNowPlayingMovies1";
import usePopularMovies from "../utils/hooks/RTK/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/RTK/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/RTK/useUpcomingMovies";
import useArrivingToday from "../utils/hooks/RTK/Tv/useArrivingToday";
import useOnTheAirTv from "../utils/hooks/RTK/Tv/useOnTheAirTv";
import usePopularTv from "../utils/hooks/RTK/Tv/usePopularTv";
import useTopRatedTv from "../utils/hooks/RTK/Tv/useTopRatedTv";

const Browse = () => {

  useNowPlayingMovies1();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // tv
  useTopRatedTv();
  usePopularTv();
  useOnTheAirTv();
  useArrivingToday();

  return (
    <div className="relative bg-black font-roboto h-full transition-all duration-700">
      <div className="flex flex-col relative ">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
