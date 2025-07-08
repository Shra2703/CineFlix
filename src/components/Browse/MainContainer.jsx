import { useSelector } from "react-redux";

// components
import VideoBackground from "./VideoBackground";
import TitleContainer from "./TitleContainer";
import MainContainerShimmer from "../ShimmerUi/MainContainerShimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return <MainContainerShimmer />;

  const nowPlayingMovie = movies[0];
  const { title, overview, id } = nowPlayingMovie;
 
  return (
    <main className="w-full text-white h-screen min-h-[80vh] relative max-sm:min-h-[60vh] max-sm:h-[60vh]">
      <VideoBackground movieId={id} title = {title}/>
      <TitleContainer title={title} overview={overview} />
    </main>
  );
};

export default MainContainer;
