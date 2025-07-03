// components
import MainContainer from "../components/Browse/MainContainer";
import SecondaryContainer from "../components/Browse/SecondaryContainer";
import Header from "../components/Header";

// hooks
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import useArrivingTodayTv from "../utils/hooks/Tv/useARrivingToday";
import useOnTheAirTv from "../utils/hooks/Tv/useOnTheAirTv";
import usePopularTv from "../utils/hooks/Tv/usePopularTv";
import useTopRatedTv from "../utils/hooks/Tv/useTopRatedTv";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // tv
  useTopRatedTv();
  usePopularTv();
  useOnTheAirTv();
  useArrivingTodayTv();

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
