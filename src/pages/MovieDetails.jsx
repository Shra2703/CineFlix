import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

// hooks
import useMovieDetails from "../utils/hooks/MovieDetails/useMovieDetails";
import useMovieVideos from "../utils/hooks/MovieDetails/useMovieVideos";
import useMovieRecommendation from "../utils/hooks/MovieDetails/useMovieRecomm";

// components
import MainDetailsContainer from "../components/MovieDetails/MainDetailsContainer";
import SecondaryDetailsContainer from "../components/MovieDetails/SecondaryDetailsContainer";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const type = pathname.split("/")[2].split("-")[1];
  const { id } = useParams();
  useMovieDetails(id, type);
  useMovieVideos(id, type);
  useMovieRecommendation(id, type)

  return (
    <div className="relative bg-black font-roboto h-full transition-all duration-400 flex flex-col">
      <MainDetailsContainer />
      <SecondaryDetailsContainer />
    </div>
  );
};

export default MovieDetails;
