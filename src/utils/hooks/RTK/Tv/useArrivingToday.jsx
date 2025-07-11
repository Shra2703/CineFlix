import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// constants
import axiosInstance from "../../../axiosInstance";

// store
import { addArrivingTodayTv } from "../../../redux/slices/tvSlice";

// api endpoint
import { getArrivingTodayTvApi } from "../../../apiEndPointsRTK";

const useArrivingToday = () => {
  const dispatch = useDispatch();
  const arrivingTodayTv = useSelector((store) => store.movies?.arrivingTodayTv);

  const fetchArrivingTodayTv = async () => {
    try {
      const response = await axiosInstance.get(getArrivingTodayTvApi());
      const results = response?.data?.results;
      return results;
    } catch (error) {
      console.error("❌ API error:", error.message);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["arrivingTodayTv"],
    queryFn: fetchArrivingTodayTv,
    enabled: !arrivingTodayTv || arrivingTodayTv.length === 0,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      dispatch(addArrivingTodayTv(data));
    }
  }, [data, dispatch]);
};

export default useArrivingToday;
