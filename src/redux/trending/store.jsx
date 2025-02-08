import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videos/slice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});

export default store;