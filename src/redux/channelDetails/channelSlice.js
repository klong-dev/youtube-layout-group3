import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  videoDetail: null,
  channelDetails: null,
  loading: false,
  error: null,
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    // Fetch video list
    fetchVideosRequest: (state) => {
      state.loading = true;
    },
    fetchVideosSuccess: (state, action) => {
      state.videos = [...state.videos, ...action.payload];
      state.loading = false;
    },
    fetchVideosFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Fetch video details
    fetchVideoByIdRequest: (state) => {
      state.loading = true;
    },
    fetchVideoByIdSuccess: (state, action) => {
      state.videoDetail = action.payload;
      state.loading = false;
    },
    fetchVideoByIdFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Fetch channel details
    fetchChannelDetailsRequest: (state) => {
      state.loading = true;
    },
    fetchChannelDetailsSuccess: (state, action) => {
      console.log(action.payload);
      state.channelDetails = action.payload;
      state.loading = false;
    },
    fetchChannelDetailsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export actions
export const {
  fetchVideosRequest,
  fetchVideosSuccess,
  fetchVideosFailure,
  fetchVideoByIdRequest,
  fetchVideoByIdSuccess,
  fetchVideoByIdFailure,
  fetchChannelDetailsRequest,
  fetchChannelDetailsSuccess,
  fetchChannelDetailsFailure,
} = channelSlice.actions;

// Export reducer
export default channelSlice.reducer;
