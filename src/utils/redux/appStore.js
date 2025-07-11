import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/userSlice";
import moviesReducer from "../redux/slices/movieSlice";
import tvReducer from "../redux/slices/tvSlice";
import gptReducer from "../redux/slices/gptSlice"
import searchReducer from "../redux/slices/searchSlice";
import errorReducer from "../redux/slices/errorSlice";
import loadingReducer from "../redux/slices/loadingSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    search: searchReducer,
    tv: tvReducer,
    gpt: gptReducer,
    error: errorReducer,
    loading: loadingReducer,
  },
});

export default appStore;
