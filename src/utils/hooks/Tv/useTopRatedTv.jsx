import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addTopRatedTv } from "../../redux/slices/tvSlice";

// api endpoint
import { getTopRatedTvApi } from "../../apiEndPoints";

const useTopRatedTv = () => {
  const dispatch = useDispatch();

  const getTopRatedTv = async () => {
    const data = await fetch(getTopRatedTvApi(), API_OPTIONS);
    const tv = await data.json();
    dispatch(addTopRatedTv(tv.results));
  };

  useEffect(() => {
    getTopRatedTv();
  }, []);
};

export default useTopRatedTv;
