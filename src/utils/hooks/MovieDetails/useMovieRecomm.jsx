import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addMovieRecommendations } from "../../redux/slices/movieSlice";

// api endpoint
import { getMovieRecommendationsApi, getTvRecommendationsApi } from "../../apiEndPoints";

const useMovieRecommendation = (id, type) => {
  const dispatch = useDispatch();

  const getMovieRecommendations = async () => {
    let data = null;
    if (type === "movies") {
      data = await fetch(getMovieRecommendationsApi(id), API_OPTIONS);
    } else {
      data = await fetch(getTvRecommendationsApi(id), API_OPTIONS);
    }
    const recommendations = await data.json();
    console.log(recommendations)
    dispatch(addMovieRecommendations(recommendations.results));
  };

  useEffect(() => {
    getMovieRecommendations();
  }, [id]);
};

export default useMovieRecommendation;
