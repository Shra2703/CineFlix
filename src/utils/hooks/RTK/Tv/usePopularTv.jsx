import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../../axiosInstance";

// store
import { addPopularTv } from "../../../redux/slices/tvSlice";

// api endpoint
import { getPopularTvApi } from "../../../apiEndPointsRTK";

const usePopularTv = () => {
  const dispatch = useDispatch();
  const popularTv = useSelector((store) => store.movies?.popularTv);

  const fetchPopularTv = async () => {
    try {
      const response = await axiosInstance.get(getPopularTvApi());
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["popularTv"],
    queryFn: fetchPopularTv,
    enabled: !popularTv || popularTv.length === 0,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      dispatch(addPopularTv(data));
    }
  }, [data, dispatch]);
};

export default usePopularTv;
