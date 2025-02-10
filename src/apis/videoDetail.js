import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchVideos = async (action) => {
  try {
    const params = action.payload?.videoId
      ? {
          part: "snippet,contentDetails,statistics",
          id: action.payload.videoId,
          key: API_KEY,
        }
      : {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "VN",
          maxResults: 12,
          key: API_KEY,
        };

    const videoResponse = await axios.get(BASE_URL, { params });
    if(!videoResponse.ok)
        return null;
   
    const rcmResponse = await axios.get(`${BASE_URL}/videos`, {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "VN",
          maxResults: 12,
          key: API_KEY,
        },
      });

    return {videoResponse, rcmResponse};
  } catch (error) {
    console.log(error.message)
    return null;
  }
}