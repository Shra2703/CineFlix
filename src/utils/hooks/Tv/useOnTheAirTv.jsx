import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addOnTheAirTv } from "../../redux/slices/tvSlice";

// api endpoint
import { getOnTheAirTvApi } from "../../apiEndPoints";

const useOnTheAirTv = () => {
  const dispatch = useDispatch();
  const onTheAir = useSelector((store) => store.tv.onTheAirTv);

  const getOnTheAirTv = async () => {
    const data = await fetch(getOnTheAirTvApi(), API_OPTIONS);
    const tv = await data.json();
    dispatch(addOnTheAirTv(tv.results));
  };

  useEffect(() => {
   onTheAir && getOnTheAirTv();
  }, []);
};

export default useOnTheAirTv;
