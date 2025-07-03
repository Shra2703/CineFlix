import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    arrivingTodayTv: null,
    popularTv: null,
    topRatedTv: null,
    onTheAirTv: null,
  },
  reducers: {
    addArrivingTodayTv: (state, action) => {
      state.arrivingTodayTv = action.payload;
    },
    addPopularTv: (state, action) => {
      state.popularTv = action.payload;
    },
    addTopRatedTv: (state, action) => {
      state.topRatedTv = action.payload;
    },
    addOnTheAirTv: (state, action) => {
      state.onTheAirTv = action.payload;
    },
  },
});

export default tvSlice.reducer;
export const {
  addArrivingTodayTv,
  addPopularTv,
  addTopRatedTv,
  addOnTheAirTv,
} = tvSlice.actions;
