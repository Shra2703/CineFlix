import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addOnTheAirTv } from "../../redux/slices/tvSlice";

// api endpoint
import { getOnTheAirTvApi } from "../../apiEndPoints";

const useOnTheAirTv = () => {
  const dispatch = useDispatch();

  const getOnTheAirTv = async () => {
    const data = await fetch(getOnTheAirTvApi(), API_OPTIONS);
    const tv = await data.json();
    dispatch(addOnTheAirTv(tv.results));
  };

  useEffect(() => {
    getOnTheAirTv();
  }, []);
};

export default useOnTheAirTv;
