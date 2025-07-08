import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addArrivingTodayTv } from "../../redux/slices/tvSlice";

// api endpoint
import { getArrivingTodayTvApi } from "../../apiEndPoints";

const useArrivingTodayTv = () => {
  const dispatch = useDispatch();
  const arrivingToday = useSelector((store) => store.tv.arrivingTodayTv);

  const getArrivingToday = async () => {
    const data = await fetch(getArrivingTodayTvApi(), API_OPTIONS);
    const tv = await data.json();
    dispatch(addArrivingTodayTv(tv.results));
  };

  useEffect(() => {
    !arrivingToday && getArrivingToday();
  }, []);
};

export default useArrivingTodayTv;
