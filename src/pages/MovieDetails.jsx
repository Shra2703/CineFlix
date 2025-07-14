import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// hooks
import useMovieRecommendation from "../utils/hooks/RTK/MovieDetails/useMovieRecomm";
import useMovieDetails from "../utils/hooks/RTK/MovieDetails/useMovieDetails";

// components
import MainDetailsContainer from "../components/MovieDetails/MainDetailsContainer";
import SecondaryDetailsContainer from "../components/MovieDetails/SecondaryDetailsContainer";
import BoxSkeleton from "../components/ShimmerUi/BoxSkeleton";
import useMovieVideos from "../utils/hooks/RTK/MovieDetails/useMovieVideos";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const type = pathname.split("/")[2].split("-")[1];
  const { id } = useParams();
  const error = useSelector((store) => store.error?.errorMessage);
  const details = useSelector((store) => store.movies?.movieDetails);

  const { isPending } = useMovieDetails(id, type);
  useMovieRecommendation(id, type);
  useMovieVideos(id, type);

  if (isPending)
    return (
      <main className="text-white w-full h-screen bg-black relative flex items-center justify-center p-20 max-md:p-10">
        <BoxSkeleton classname=" w-full h-full max-sm:h-60 max-sm:mb-14" />
      </main>
    );

  if (error)
    return (
      <h1 className="text-white w-full h-screen bg-black relative font-consent text-6xl flex items-center justify-center max-md:text-2xl">
        {error}
      </h1>
    );

  if (!details) {
    return (
      <h1 className="text-white w-full h-screen bg-black relative font-consent text-6xl flex items-center justify-center max-md:text-2xl">
        No details found
      </h1>
    );
  }

  return (
    <div className="relative bg-black font-roboto h-full transition-all duration-400 flex flex-col overflow-y-hidden">
      <MainDetailsContainer />
      <SecondaryDetailsContainer type={type} />
    </div>
  );
};

export default MovieDetails;
