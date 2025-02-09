export const FETCH_VIDEOS_REQUEST = "FETCH_VIDEOS_REQUEST";
export const FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS";
export const FETCH_VIDEOS_FAILURE = "FETCH_VIDEOS_FAILURE";

export const fetchVideosRequest = (query) => ({
  type: FETCH_VIDEOS_REQUEST,
  payload: query,
});

// Action fetchVideosSuccess để nhận thêm video mới và giữ video cũ
export const fetchVideosSuccess = (videos) => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchVideosFailure = (error) => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: error,
});

// action types
export const FETCH_VIDEO_BY_ID_REQUEST = "FETCH_VIDEO_BY_ID_REQUEST";
export const FETCH_VIDEO_BY_ID_SUCCESS = "FETCH_VIDEO_BY_ID_SUCCESS";
export const FETCH_VIDEO_BY_ID_FAILURE = "FETCH_VIDEO_BY_ID_FAILURE";

// action creators
export const fetchVideoByIdRequest = (id) => ({
  type: FETCH_VIDEO_BY_ID_REQUEST,
  payload: id,
});

export const fetchVideoByIdSuccess = (video) => ({
  type: FETCH_VIDEO_BY_ID_SUCCESS,
  payload: video,
});

export const fetchVideoByIdFailure = (error) => ({
  type: FETCH_VIDEO_BY_ID_FAILURE,
  payload: error,
});

// action types
export const FETCH_CHANNEL_DETAILS_REQUEST = "FETCH_CHANNEL_DETAILS_REQUEST";
export const FETCH_CHANNEL_DETAILS_SUCCESS = "FETCH_CHANNEL_DETAILS_SUCCESS";
export const FETCH_CHANNEL_DETAILS_FAILURE = "FETCH_CHANNEL_DETAILS_FAILURE";

// action creators
export const fetchChannelDetailsRequest = (channelId) => ({
  type: FETCH_CHANNEL_DETAILS_REQUEST,
  payload: channelId,
});

export const fetchChannelDetailsSuccess = (channelDetails) => ({
  type: FETCH_CHANNEL_DETAILS_SUCCESS,
  payload: channelDetails,
});

export const fetchChannelDetailsFailure = (error) => ({
  type: FETCH_CHANNEL_DETAILS_FAILURE,
  payload: error,
});
