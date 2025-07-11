import SecondaryShimmer from "../ShimmerUi/SecondaryShimmer";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const arrivingTodayTv = useSelector((store) => store.tv?.arrivingTodayTv);
  const onTheAirTv = useSelector((store) => store.tv?.onTheAirTv);
  const popularTv = useSelector((store) => store.tv?.popularTv);
  const topRatedTv = useSelector((store) => store.tv?.topRatedTv);

  if (!nowPlayingMovies) {
    return (
      <>
        <SecondaryShimmer />
        <SecondaryShimmer />
      </>
    );
  }

  const sectionsMovies = [
    { title: "Now Playing", movieList: nowPlayingMovies },
    { title: "Popular Movies", movieList: popularMovies },
    { title: "Top Rated Movies", movieList: topRatedMovies },
    { title: "Upcoming Movies", movieList: upcomingMovies },
  ];

  const sectionsShows = [
    { title: "Latest Shows", movieList: arrivingTodayTv },
    { title: "On The Air Shows", movieList: onTheAirTv },
    { title: "Popular Shows", movieList: popularTv },
    { title: "Top Rated Shows", movieList: topRatedTv },
  ];
  return (
    <div className="w-full bg-black/50 text-white pb-11">
      <div className="-mt-52 relative z-100 max-lg:-mt-0">
        <SecondaryMovieContainer sections={sectionsMovies} />
        <SecondaryShowsContainer sections={sectionsShows} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

const SecondaryMovieContainer = ({ sections }) => {
  return (
    <>
      {sections.map((list, index) => (
        <MovieList title={list.title} movieList={list.movieList} key={index} type = "movies" />
      ))}
    </>
  );
};

const SecondaryShowsContainer = ({ sections }) => {
  return (
    <>
      {sections.map((list, index) => (
        <MovieList title={list.title} movieList={list.movieList} key={index} type = "shows"/>
      ))}
    </>
  );
};
