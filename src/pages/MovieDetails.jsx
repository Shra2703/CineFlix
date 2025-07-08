// components
import { useParams } from "react-router-dom";
import useMovieDetails from "../utils/hooks/MovieDetails/useMovieDetails";

// components
import MainDetailsContainer from "../components/MovieDetails/MainDetailsContainer";
import SecondaryDetailsContainer from "../components/MovieDetails/SecondaryDetailsContainer";

const MovieDetails = () => {
  const {id} = useParams();
  useMovieDetails(id);
  return (
    <div className="relative bg-black font-roboto h-full transition-all duration-700 flex flex-col">
      <MainDetailsContainer />
      <SecondaryDetailsContainer />
    </div>
  );
};

export default MovieDetails;
