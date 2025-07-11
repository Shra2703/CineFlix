import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../../axiosInstance";

// store
import { addOnTheAirTv } from "../../../redux/slices/tvSlice";

// api endpoint
import { getOnTheAirTvApi } from "../../../apiEndPointsRTK";

const useOnTheAirTv = () => {
  const dispatch = useDispatch();
  const onTheAirTv = useSelector((store) => store.movies?.onTheAirTv);

  const fetchOnTheAirTv = async () => {
    try {
      const response = await axiosInstance.get(getOnTheAirTvApi());
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["onTheAirTv"],
    queryFn: fetchOnTheAirTv,
    enabled: !onTheAirTv || onTheAirTv.length === 0,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      dispatch(addOnTheAirTv(data));
    }
  }, [data, dispatch]);
};

export default useOnTheAirTv;
