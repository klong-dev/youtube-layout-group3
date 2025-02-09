import {
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  FETCH_VIDEO_BY_ID_REQUEST,
  FETCH_VIDEO_BY_ID_SUCCESS,
  FETCH_VIDEO_BY_ID_FAILURE,
  FETCH_CHANNEL_DETAILS_SUCCESS,
  FETCH_CHANNEL_DETAILS_FAILURE,
} from "@/redux/channelDetails/actions";

const initialState = {
  videos: [],
  videoDetail: null,
  channelDetails: null, // Channel details mới
  loading: false,
  error: null,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return { ...state, loading: true };
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload],
        loading: false,
      };
    case FETCH_VIDEOS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case FETCH_VIDEO_BY_ID_REQUEST:
      return { ...state, loading: true };
    case FETCH_VIDEO_BY_ID_SUCCESS:
      return {
        ...state,
        videoDetail: action.payload,
        loading: false,
      };
    case FETCH_VIDEO_BY_ID_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case FETCH_CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        channelDetails: action.payload,
        loading: false,
      };
    case FETCH_CHANNEL_DETAILS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default videoReducer;
