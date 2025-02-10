import { useEffect, useState } from "react";
import "./SearchVideosList.scss";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideosRequest } from "@/redux/channelDetails/channelSlice";
import { useQuery } from "@/hooks/request";

const SearchVideosList = ({ isActive }) => {
  const query = useQuery();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { videos } = useSelector((state) => state.channel);
  const [showComponent, setShowComponent] = useState(false);

  // Lấy giá trị search_query từ query string
  let queryParams = new URLSearchParams(location.search);
  const searchQuery = query.get("search_query");

  useEffect(() => {
    console.log("day la query:", searchQuery);
    dispatch(fetchVideosRequest(searchQuery));
  }, [query.get("search_query")]);

  useEffect(() => {
    // Set timeout để delay 3 giây
    const timer = setTimeout(() => {
      setShowComponent(true); // Sau 3 giây thì thay đổi trạng thái để hiển thị component
    }, 1000);

    return () => clearTimeout(timer); // Dọn dẹp timer khi component bị unmount
  }, []);

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
      {showComponent && (
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
                      className="channelAvatar"
                      src={video.snippet.channelAvatar}
                    />
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
      )}
    </div>
  );
};

export default SearchVideosList;
