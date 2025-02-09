import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_VIDEOS_REQUEST,
  fetchVideosSuccess,
  fetchVideosFailure,
  fetchVideoByIdSuccess,
  fetchVideoByIdFailure,
  FETCH_VIDEO_BY_ID_REQUEST,
  fetchChannelDetailsSuccess,
  fetchChannelDetailsFailure,
  FETCH_CHANNEL_DETAILS_REQUEST,
} from "./actions";

const apiKey = "AIzaSyA8DPNMwMdPp98blRJZHSCzewSN14qgKpM";

function* fetchVideos(action) {
  try {
    const { query } = action.payload; // Lấy query từ payload

    // Gửi yêu cầu lấy video mới mà không cần pageToken
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=13&q=${query}&key=${apiKey}`;

    const response = yield call(axios.get, url);

    if (!response.data.items) {
      throw new Error("No videos found or invalid API response");
    }

    const videos = response.data.items;
    const videoIds = videos.map((video) => video.id.videoId).join(",");

    const videoDetailsResponse = yield call(
      axios.get,
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`
    );

    if (!videoDetailsResponse.data.items) {
      throw new Error("No video details found or invalid API response");
    }

    const videoViewCounts = videoDetailsResponse.data.items.reduce(
      (acc, video) => {
        acc[video.id] = video.statistics.viewCount;
        return acc;
      },
      {}
    );

    const channelIds = [
      ...new Set(videos.map((video) => video.snippet.channelId)),
    ];

    const channelResponse = yield call(
      axios.get,
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(
        ","
      )}&key=${apiKey}`
    );

    if (!channelResponse.data.items) {
      throw new Error("No channel details found or invalid API response");
    }

    const channelAvatars = channelResponse.data.items.reduce((acc, channel) => {
      acc[channel.id] = channel.snippet.thumbnails.default.url;
      return acc;
    }, {});

    const enrichedVideos = videos.map((video) => ({
      ...video,
      snippet: {
        ...video.snippet,
        channelAvatar: channelAvatars[video.snippet.channelId],
        viewCount: videoViewCounts[video.id.videoId],
      },
    }));

    // Gửi action với video mới
    yield put(fetchVideosSuccess(enrichedVideos));
  } catch (error) {
    console.error("Lỗi trong fetchVideos:", error.message);
    yield put(fetchVideosFailure(error.message));
  }
}

function* fetchVideoById(action) {
  try {
    // Lấy chi tiết video từ API
    const response = yield call(
      axios.get,
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${action.payload}&key=${apiKey}`
    );

    if (!response.data.items) {
      throw new Error("Video not found or invalid API response");
    }

    const video = response.data.items[0];
    const channelId = video.snippet.channelId;

    // Lấy thông tin kênh để có channel avatar và số lượng subscriber
    const channelResponse = yield call(
      axios.get,
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`
    );

    if (!channelResponse.data.items) {
      throw new Error("Channel not found or invalid API response");
    }

    // Lấy avatar kênh và số lượng subscriber
    const channelData = channelResponse.data.items[0];
    const channelAvatar = channelData.snippet.thumbnails.default.url;
    const subscriberCount = channelData.statistics.subscriberCount;

    // Thêm channel avatar và số lượng subscriber vào video
    const enrichedVideo = {
      ...video,
      snippet: {
        ...video.snippet,
        channelAvatar: channelAvatar, // Thêm channel avatar vào video
      },
      channelInfo: {
        subscriberCount: subscriberCount, // Thêm số lượng subscriber
      },
    };

    // Gửi action success với video đã được làm giàu
    yield put(fetchVideoByIdSuccess(enrichedVideo));
  } catch (error) {
    console.error("Lỗi trong fetchVideoById:", error.message);

    yield put(
      fetchVideoByIdFailure(
        error.response ? error.response.data.error.message : error.message
      )
    );
  }
}

function* fetchChannelDetails(action) {
  try {
    const channelId = action.payload;

    // 🔹 Gọi API lấy thông tin chi tiết kênh
    const channelResponse = yield call(
      axios.get,
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${apiKey}`
    );

    if (!channelResponse.data.items) {
      throw new Error("Không tìm thấy kênh hoặc phản hồi API không hợp lệ");
    }

    const channel = channelResponse.data.items[0];
    const brandingSettings = channel.brandingSettings || {};

    // Nếu không có banner, trả về URL mặc định hoặc null
    const banner = brandingSettings.image
      ? brandingSettings.image.bannerExternalUrl
      : null;

    const channelDetails = {
      name: channel.snippet.title,
      description: channel.snippet.description,
      banner: banner,
      thumbnail: channel.snippet.thumbnails,
      subscriberCount: channel.statistics.subscriberCount,
      videoCount: channel.statistics.videoCount,
      videos: [], // 🔹 Video sẽ lấy từ API search
      playlists: [], // 🔹 Playlist của kênh sẽ được lấy từ API playlist
    };

    // 🔹 Gọi API để lấy playlist của kênh
    const playlistResponse = yield call(
      axios.get,
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&id=${channelId}&maxResults=5&key=${apiKey}`
    );
    console.log("Day la playlist: ", playlistResponse);
    if (playlistResponse.data.items) {
      const playlists = playlistResponse.data.items.map((playlist) => ({
        playlistId: playlist.id,
        title: playlist.snippet.title,
        description: playlist.snippet.description,
        thumbnail: playlist.snippet.thumbnails.default.url,
      }));
      channelDetails.playlists = playlists;
    }

    // 🔹 Gọi API search để lấy 20 video mới nhất (tạm thời lấy nhiều hơn để lọc Shorts)
    const searchResponse = yield call(
      axios.get,
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=${channelId}&maxResults=20&order=date&type=video&key=${apiKey}`
    );

    if (!searchResponse.data.items) {
      throw new Error(
        "Không tìm thấy video nào hoặc phản hồi API không hợp lệ"
      );
    }

    // Lấy danh sách videoId từ kết quả search
    const videos = searchResponse.data.items.map((item) => ({
      kind: item.id.kind, // 🔹 Thêm kind (youtube#video)
      videoId: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt, // Ngày xuất bản video
    }));

    // 🔹 Gọi API videos để lấy thời lượng video và số lượt xem (viewCount)
    const videoIds = videos.map((video) => video.videoId).join(",");
    const videoDetailsResponse = yield call(
      axios.get,
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`
    );

    if (!videoDetailsResponse.data.items) {
      throw new Error(
        "Không tìm thấy thông tin video hoặc phản hồi API không hợp lệ"
      );
    }

    // 🔹 Lọc video không phải Shorts
    const filteredVideos = videoDetailsResponse.data.items
      .filter((video) => {
        const duration = video.contentDetails.duration;
        return (
          !duration.includes("PT") ||
          !duration.includes("S") ||
          duration.includes("M") ||
          duration.includes("H")
        );
      })
      .slice(0, 10); // Chỉ lấy 10 video sau khi lọc

    // Gán số lượt xem vào danh sách video
    channelDetails.videos = filteredVideos.map((video) => ({
      kind: "youtube#video",
      videoId: video.id,
      title: videos.find((v) => v.videoId === video.id)?.title || "",
      thumbnail: videos.find((v) => v.videoId === video.id)?.thumbnail || "",
      publishedAt:
        videos.find((v) => v.videoId === video.id)?.publishedAt || "",
      viewCount: video.statistics.viewCount || "N/A",
    }));

    // ✅ Gửi action success với thông tin chi tiết kênh
    yield put(fetchChannelDetailsSuccess(channelDetails));
  } catch (error) {
    console.error("Lỗi trong fetchChannelDetails:", error.message);
    yield put(fetchChannelDetailsFailure(error.message));
  }
}

export function* watchFetchChannelDetails() {
  yield takeLatest(FETCH_CHANNEL_DETAILS_REQUEST, fetchChannelDetails);
}

export function* watchFetchVideos() {
  yield takeLatest(FETCH_VIDEOS_REQUEST, fetchVideos);
}

export function* watchFetchVideoById() {
  yield takeLatest(FETCH_VIDEO_BY_ID_REQUEST, fetchVideoById);
}
