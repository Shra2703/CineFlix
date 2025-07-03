import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/userSlice";
import moviesReducer from "../redux/slices/movieSlice";
import tvReducer from "../redux/slices/tvSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tv: tvReducer,
  },
});

export default appStore;
