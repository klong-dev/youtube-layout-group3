import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchVideosSuccess,
  fetchVideosFailure,
} from "./reducers/videoSlice.jsx";


const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

function fetchVideosApi(params) {
  return axios.get(`${BASE_URL}/videos`, { params });
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
  } catch (error) {
    yield put(fetchVideosFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest("videos/fetchVideos", fetchVideos);
}
