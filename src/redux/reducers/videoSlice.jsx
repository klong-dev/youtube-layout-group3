import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchVideos: (state) => {
      state.loading = true;
    },
    fetchVideosSuccess: (state, action) => {
      state.videos = action.payload;
      state.loading = false;
    },
    fetchVideosFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchVideos, fetchVideosSuccess, fetchVideosFailure } =
  videoSlice.actions;
export default videoSlice.reducer;
