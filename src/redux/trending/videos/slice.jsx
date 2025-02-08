import { createSlice } from "@reduxjs/toolkit"
import { fetchVideosByCategory, fetchVideos } from "./thunks"

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        videos: [],
        loading: {
            fetchVideos: false,
            fetchVideosByCategory: false,
        },
        error: {
            fetchVideos: null,
            fetchVideosByCategory: null,
        },
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder
            // FETCH VIDEOS
            .addCase(fetchVideos.pending, (state) => {
                state.loading.fetchVideos = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading.fetchVideos = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.loading.fetchVideos = false;
                state.error.fetchVideos = action.error.message;
            })
             // FETCH VIDEOS BY CATEGORY
             .addCase(fetchVideosByCategory.pending, (state) => {
                state.loading.fetchVideosByCategory = true;
            })
            .addCase(fetchVideosByCategory.fulfilled, (state, action) => {
                state.loading.fetchVideosByCategory = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideosByCategory.rejected, (state, action) => {
                state.loading.fetchVideosByCategory = false;
                state.error.fetchVideosByCategory = action.error.message;
            });
    }
});

export default videoSlice.reducer;