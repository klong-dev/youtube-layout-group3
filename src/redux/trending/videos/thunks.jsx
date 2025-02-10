import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchListVideos, fetchVideosByCategoryAPI } from "../../../apis/Trending";

// Fetch videos
export const fetchVideos = createAsyncThunk('videos/fetchVideos', fetchListVideos);

// Fetch video by category
export const fetchVideosByCategory = createAsyncThunk('video/fetchVideoByCategory', async (categoryId) => fetchVideosByCategoryAPI(categoryId));