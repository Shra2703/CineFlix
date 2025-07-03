// components
import VideoBackground from "./VideoBackground";
import TitleContainer from "./TitleContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const nowPlayingMovie = movies[0];
  const { title, overview, id } = nowPlayingMovie;
  console.log(nowPlayingMovie)
  return (
    <main className="w-full border-black border  min-h-[80vh] relative">
      <VideoBackground movieId={id} title = {title}/>
      <TitleContainer title={title} overview={overview} />
    </main>
  );
};

export default MainContainer;
