import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// hooks
import useMovieVideos from "../utils/hooks/RTK/MovieDetails/useMovieVideos";
import useMovieRecommendation from "../utils/hooks/RTK/MovieDetails/useMovieRecomm";
import useMovieDetails from "../utils/hooks/RTK/MovieDetails/useMovieDetails";

// components
import MainDetailsContainer from "../components/MovieDetails/MainDetailsContainer";
import SecondaryDetailsContainer from "../components/MovieDetails/SecondaryDetailsContainer";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const type = pathname.split("/")[2].split("-")[1];
  const { id } = useParams();
  const error = useSelector((store) => store.error?.errorMessage);
  useMovieDetails(id, type);
  useMovieVideos(id, type);
  useMovieRecommendation(id, type);

  if (error)
    return (
      <h1 className="text-white w-full h-screen bg-black relative font-consent text-6xl flex items-center justify-center">
        {error}
      </h1>
    );

  return (
    <div className="relative bg-black font-roboto h-full transition-all duration-400 flex flex-col overflow-y-hidden">
      <MainDetailsContainer />
      <SecondaryDetailsContainer type={type} />
    </div>
  );
};

export default MovieDetails;
