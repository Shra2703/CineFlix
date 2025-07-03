// components
import Header from "../components/Header";

// hooks
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
