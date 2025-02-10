import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    loading: false,
    error: null,
    recommendedVideos: [],
  },
  reducers: {
    fetchVideos: (state) => {
      state.loading = true;
    },
    fetchVideosSuccess: (state, action) => {
      state.videos = action.payload;
      state.recommendedVideos = action.payload;
      state.loading = false;
    },
    fetchVideosFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchRecommendedVideosSuccess: (state, action) => {
      state.recommendedVideos = action.payload; // Lưu danh sách video đề xuất
    },
  },
});

export const {
  fetchVideos,
  fetchVideosSuccess,
  fetchVideosFailure,
  fetchRecommendedVideosSuccess,
} = videoSlice.actions;
export default videoSlice.reducer;
