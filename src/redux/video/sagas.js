import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchVideosSuccess,
  fetchVideosFailure,
  fetchRecommendedVideosSuccess,
} from "@/redux/video/videoSlice";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

function fetchVideosApi(params) {
  return axios.get(`${BASE_URL}/videos`, { params });
}

function fetchRecommendedVideosApi() {
  return axios.get(`${BASE_URL}/videos`, {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "VN",
      maxResults: 12,
      key: API_KEY,
    },
  });
}

function* fetchVideos(action) {
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

    const response = yield call(fetchVideosApi, params);
    yield put(fetchVideosSuccess(response.data.items));
    const recommendedVideosResponse = yield call(fetchRecommendedVideosApi);
    yield put(
      fetchRecommendedVideosSuccess(recommendedVideosResponse.data.items)
    );
  } catch (error) {
    yield put(fetchVideosFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest("videos/fetchVideos", fetchVideos);
}
