// components
import VideoBackground from "./VideoBackground";
import TitleContainer from "./TitleContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const nowPlayingMovie = movies[0];
  const { title, overview, id } = nowPlayingMovie;
 
  return (
    <main className="w-full border h-screen min-h-[80vh] relative max-sm:min-h-[60vh] max-sm:h-[60vh]">
      <VideoBackground movieId={id} title = {title}/>
      <TitleContainer title={title} overview={overview} />
    </main>
  );
};

export default MainContainer;
