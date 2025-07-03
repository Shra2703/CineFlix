import { useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { API_OPTIONS } from "../../../constanst";

// store
import { addPopularTv } from "../../redux/slices/tvSlice";

// api endpoint
import { getPopularTvApi } from "../../apiEndPoints";

const usePopularTv = () => {
  const dispatch = useDispatch();

  const getPopularTv = async () => {
    const data = await fetch(getPopularTvApi(), API_OPTIONS);
    const tv = await data.json();
    dispatch(addPopularTv(tv.results));
  };

  useEffect(() => {
    getPopularTv();
  }, []);
};

export default usePopularTv;
