import { useEffect, useState } from "react";
import "./SearchVideosList.scss";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideosRequest } from "../../../redux/channelDetails/channelSlice";

const SearchVideosList = ({ isActive }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { videos } = useSelector((state) => state.channel);

  // Lấy giá trị search_query từ URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search_query");

  useEffect(() => {
    dispatch(fetchVideosRequest(searchQuery));
  }, [location.search]); // Theo dõi toàn bộ URL để đảm bảo fetch lại khi search thay đổi

  console.log("Day la search result: ", videos);

  const viewFormat = (view) => {
    if (view >= 1000 && view < 1000000) {
      return (view / 1000).toFixed(1) + "K";
    } else if (view >= 1000000 && view < 1000000000) {
      return (view / 1000000).toFixed(1) + "M";
    } else if (view > 1000000000) {
      return (view / 1000000000).toFixed(1) + "B";
    } else if (view < 1000) {
      return view;
    }
  };

  return (
    <div className={`searchResultVideoList_wrap ${isActive ? "" : "active"}`}>
      <div className="searchResultVideoList">
        {videos.map((video) => (
          <div key={video.videoId} className="card">
            <div className="searchRsVideoList_img_wrap">
              {video.id.kind === "youtube#channel" ? (
                <img
                  onClick={() => {
                    navigate(`/c/${video.id.channelId}`);
                  }}
                  className="card_img_channel"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.title}
                />
              ) : (
                <img
                  onClick={() => {
                    navigate(`/video/${video.id.videoId}`);
                  }}
                  className="card_img"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.title}
                />
              )}
            </div>

            <div className="card_info_wrap">
              <div className="card_info">
                <div className="card_info_title">
                  <p>{video.snippet.title}</p>
                </div>
                <div className="card_info_view">
                  <p>{viewFormat(video.snippet.viewCount)} Views</p>
                </div>
                <div className="card_info_channel">
                  <img
                    onClick={() => {
                      navigate(`/c/${video.id.channelId}`);
                    }}
                    className="channelAvatar rounded-full"
                    src={video.snippet.channelAvatar}
                  />
                  {console.log("check: ", video.id.channelId)}
                  <p>{video.snippet.channelTitle}</p>
                </div>
                <div className="card_info_description">
                  <p>{video.snippet.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchVideosList;
