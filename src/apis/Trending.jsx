import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY_TRENDING;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchListVideos = async () => {
    const response = await axios.get(`${BASE_URL}/videos`, {
        params: {
            key: API_KEY,
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            maxResults: 25,
            regionCode: 'VN',
            type: 'video',
        },
    });
    return response.data.items;
};

export const fetchVideosByCategoryAPI = async (categoryId) => {
    const response = await axios.get(`${BASE_URL}/videos`, {
        params: {
            key: API_KEY,
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            videoCategoryId: categoryId,
            maxResults: 25,
            regionCode: 'VN',
            type: 'video',
        },
    });
    return response.data.items;
};