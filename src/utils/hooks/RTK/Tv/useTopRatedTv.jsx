import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../../axiosInstance";

// store
import { addTopRatedTv } from "../../../redux/slices/tvSlice";

// api endpoint
import { getTopRatedTvApi } from "../../../apiEndPointsRTK";

const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const topRatedTv = useSelector((store) => store.movies?.topRatedTv);

  const fetchTopRatedTv = async () => {
    try {
      const response = await axiosInstance.get(getTopRatedTvApi());
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["topRatedTv"],
    queryFn: fetchTopRatedTv,
    enabled: !topRatedTv || topRatedTv.length === 0,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      dispatch(addTopRatedTv(data));
    }
  }, [data, dispatch]);
};

export default useTopRatedTv;
