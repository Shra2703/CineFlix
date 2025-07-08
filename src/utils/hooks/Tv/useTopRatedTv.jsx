import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addTopRatedTv } from "../../redux/slices/tvSlice";

// api endpoint
import { getTopRatedTvApi } from "../../apiEndPoints";

const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const topRatedTv = useSelector((store) => store.tv.topRatedTv);

  const getTopRatedTv = async () => {
    const data = await fetch(getTopRatedTvApi(), API_OPTIONS);
    const tv = await data.json();
    dispatch(addTopRatedTv(tv.results));
  };

  useEffect(() => {
   !topRatedTv && getTopRatedTv();
  }, []);
};

export default useTopRatedTv;
