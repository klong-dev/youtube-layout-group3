import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/video/videoSlice";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import { Input } from "antd";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { Link, useParams } from "react-router";
import { formatView } from "@/utils/format";

function Detail() {
  const dispatch = useDispatch();
  const {
    videos = [],
    recommendedVideos = [],
    loading,
    error,
  } = useSelector(
    (state) => state.videos || { videos: [], recommendedVideos: [] }
  );
  const [history, setHistory] = useState([]);
  const [video, setVideo] = useState(null);
  const [showFull, setShowFull] = useState(false);
  const contentRef = useRef(null);
  const [isLong, setIsLong] = useState(false);
  const [comment, setComment] = useState(false);
  const [write, setWrite] = useState("");
  const [update, setUpdate] = useState(false);
  const [idCmt, setIdCmt] = useState();
  const [cmt, setCmt] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editPosition, setEditPosition] = useState({ top: 0, left: 0 });
  const editRef = useRef(null);
  const { videoId } = useParams();
  useEffect(() => {
    dispatch(fetchVideos({ videoId }));
  }, [dispatch, videoId]);

  useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos[0]);
    }
  }, [videos]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (editRef.current && !editRef.current.contains(e.target)) {
        setEdit(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setIsLong(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [video]);

  useEffect(() => {
    console.log("history:", history);
  }, [history]);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-500">Lỗi: {error}</p>;
  if (!video) return <p>Không có video nào!</p>;

  const handleSearch = (e) => {
    const term = e.target.value;
    setWrite(term);
  };

  const handleComment = () => {
    if (update === true) {
      setCmt(
        cmt.map((item) =>
          item.id === idCmt
            ? {
                ...item,
                text: write,
                time: new Date().toLocaleString("vi-VN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }),
              }
            : item
        )
      );
      setIdCmt(null);
    } else {
      if (write.trim() === "") return;
      const newComment = {
        id: Date.now(),
        text: write,
        time: new Date().toLocaleString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      setCmt([...cmt, newComment]);
    }
    setWrite("");
  };

  const handleClickEdit = (event, id) => {
    setEdit(true);
    setEditPosition({
      top: event.clientY + window.scrollY,
      left: event.clientX,
    });
    setIdCmt(id);
  };

  const handleDelete = () => {
    setCmt(cmt.filter((item) => item.id !== idCmt));
  };

  const handleUpdate = () => {
    const selectCmt = cmt.find((item) => item.id === idCmt);
    setWrite(selectCmt.text);
    setEdit(false);
    setComment(true);
    setUpdate(true);
  };

  const handleHistory = (video) => {
    setHistory((prevHistory) => {
      let updatedHistory = prevHistory.filter((item) => item.id !== video.id);
      updatedHistory.unshift(video);

      localStorage.setItem("watchedVideos", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  return (
    <div className="flex ml-8 mr-8 mt-15 gap-6 bg-[#100f0f] min-h-screen">
      <div className="w-[60rem] h-[20rem]">
        <iframe
          className="rounded-xl w-full h-[25rem]"
          src={`https://www.youtube.com/embed/${video.id}`}
          allowFullScreen
        ></iframe>
        <p className="text-white text-xl font-bold mt-2">
          {video.snippet?.title}
        </p>

        <div className="mt-5 flex justify-between">
          <div className="flex items-center gap-6.5">
            <img
              className="rounded-full"
              width={50}
              src={video.snippet.thumbnails.default.url}
              alt=""
            />
            <div>
              <p className="text-white font-bold">
                {video?.snippet?.channelTitle}
              </p>
              <p className="text-gray-300 text-[13px]">900 N người đăng ký</p>
            </div>

            <div className="flex gap-3">
              <button className="text-white px-4 py-1.5 rounded-2xl bg-[#2C2C2C]">
                Tham gia
              </button>
              <button className="text-black px-4 py-1.5 rounded-2xl bg-gray-200">
                Đăng ký
              </button>
            </div>
          </div>

          <div className="flex gap-3.5 h-10 mt-2">
            <div className="bg-[#2C2C2C] w-auto px-3 py-1.5 rounded-3xl flex gap-4">
              <button
                className="text-white flex items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <ThumbUpOutlinedIcon style={{ fontSize: 20 }} /> 7,5N
              </button>
              <span className="text-white">|</span>
              <button
                className="text-white flex items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <ThumbDownOutlinedIcon style={{ fontSize: 20 }} />
              </button>
            </div>

            <div className="bg-[#2C2C2C] w-auto px-3 py-1.5 rounded-3xl flex gap-2">
              <button className="bg-[#2C2C2C] text-white flex items-center gap-3 pr-1">
                <ReplyOutlinedIcon style={{ fontSize: 24 }} /> Chia sẻ
              </button>
            </div>

            <div className="bg-[#2C2C2C] w-auto px-3 py-1.5 rounded-3xl flex gap-3 h-auto">
              <button className="bg-[#2C2C2C] text-white flex items-center gap-3 pr-1">
                <FileDownloadOutlinedIcon style={{ fontSize: 24 }} /> Tải xuống
              </button>
            </div>
            <div className="bg-[#2C2C2C] w-auto px-3 py-1.5 rounded-3xl gap-3 text-white">
              <p className="relative bottom-1 text-[20px]">...</p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 mt-5">
          <div className="bg-[#2C2C2C] w-full h-auto rounded-2xl text-white px-5 py-3">
            <div className="flex gap-4 font-bold">
              <p>{formatView(video?.statistics?.viewCount)}</p>
              <p>10 tháng trước</p>
            </div>
            <div
              ref={contentRef}
              className={`transition-all duration-300 ${
                showFull ? "" : "line-clamp-2 overflow-hidden"
              }`}
            >
              <p>{video?.snippet?.description}</p>
            </div>
            <p className="mt-10">Phát hành vào:{video?.snippet?.publishedAt}</p>
            <p>Do YouTube tạo tự động.</p>

            <div className="flex gap-4 mt-5">
              <img
                className="rounded-full"
                width={50}
                src={video.snippet.thumbnails.default.url}
                alt=""
              />
              <div>
                <p className="text-white font-bold">
                  {video?.snippet?.channelTitle}
                </p>
                <p className="text-gray-300 text-[13px]">900 N người đăng ký</p>
              </div>
            </div>
            {isLong && (
              <div
                className="text-gray-300 text-sm cursor-pointer mt-2"
                onClick={() => setShowFull(!showFull)}
              >
                {showFull ? "Thu gọn" : "Xem thêm"}
              </div>
            )}
          </div>
        </div>

        <div className="text-white flex gap-4 mt-7">
          <p className="text-[20px] font-bold">
            {video?.statistics?.commentCount} bình luận
          </p>
          <p className="text-[16px] font-bold">
            <SortOutlinedIcon className="pr-2" />
            Sắp xếp theo
          </p>
        </div>

        <div className="flex gap-3 mt-10">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.VDIiQb2aRk06gZOi67vCcQHaHo&pid=Api&P=0&h=220"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
            alt=""
          />
          <Input
            onClick={() => setComment(true)}
            placeholder="Viết bình luận ..."
            onChange={handleSearch}
            value={write}
            className="border-none border-b border-gray-300 rounded-none shadow-none ml-5 h-[50px] focus:ring-0 focus:outline-none"
          ></Input>
        </div>

        {comment == true ? (
          <div className="flex justify-between">
            <div></div>
            <div className="flex gap-3.5 mt-3">
              <button
                className="text-white font-bold"
                onClick={() => {
                  setComment(false);
                  setWrite("");
                }}
                type="secondary"
                style={{ cursor: "pointer" }}
              >
                Hủy
              </button>

              {update ? (
                <button
                  className={`text-white font-bold px-4 py-2 rounded-3xl bg-[#2C2C2C] ${
                    write
                      ? "text-black font-bold px-4 py-2 rounded-3xl bg-blue-700"
                      : ""
                  }`}
                  onClick={() => {
                    handleComment();
                    setComment(false);
                    setUpdate(false);
                  }}
                >
                  Lưu
                </button>
              ) : (
                <button
                  className={`text-white font-bold px-4 py-2 rounded-3xl bg-[#2C2C2C] ${
                    write
                      ? "text-black font-bold px-4 py-2 rounded-3xl bg-blue-700"
                      : ""
                  }`}
                  onClick={handleComment}
                >
                  Bình luận
                </button>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {cmt.map((item, index) => (
          <div className="text-white flex justify-between mt-10" key={index}>
            <div className="flex gap-3">
              <img
                className="self-start"
                src={
                  "https://tse1.mm.bing.net/th?id=OIP.VDIiQb2aRk06gZOi67vCcQHaHo&pid=Api&P=0&h=220"
                }
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <div className="">
                <div className="flex gap-3">
                  <h5>Trịnh Trần Phương Tuấn</h5>
                  <p>{item.time}</p>
                </div>
                <p>{item.text}</p>
                <div className="">
                  <ThumbUpOffAltIcon />
                  <ThumbDownOffAltIcon style={{ marginLeft: "15px" }} />
                  <Link className="pl-3">Phản hồi</Link>
                </div>
              </div>
            </div>

            <div>
              <MoreVertIcon
                style={{ cursor: "pointer" }}
                onClick={(e) => handleClickEdit(e, item.id)}
              />
            </div>
          </div>
        ))}

        {edit ? (
          <div
            ref={editRef}
            className=""
            style={{
              top: editPosition.top,
              left: editPosition.left,
              position: "absolute",
            }}
            tabIndex={0}
            onBlur={() => setEdit(false)}
          >
            <div></div>
            <div className="flex flex-col px-5 py-2 rounded-2xl bg-[#2C2C2C] text-white relative top-[20px] right-10 z-30">
              <button
                onClick={handleUpdate}
                type="secondary"
                style={{ cursor: "pointer" }}
              >
                Chỉnh sửa
              </button>
              <button
                type="secondary"
                onClick={() => {
                  if (confirm("Do you want to delete?")) {
                    handleDelete();
                  }
                  setEdit(false);
                }}
                style={{ cursor: "pointer" }}
              >
                Xóa
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-[25rem] flex flex-col gap-4">
        {recommendedVideos.map((item) => (
          <Link
            key={item.id}
            to={`/video/${item.id}`}
            className="flex items-start gap-3 text-white hover:bg-[#2e2e2e] p-2 rounded-lg transition"
            onClick={() => handleHistory(item)}
          >
            <div className="relative w-[160px] h-[90px] rounded-lg overflow-hidden">
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 py-0.5 rounded">
                30:11
              </span>
            </div>

            <div className="flex flex-col justify-between w-full">
              <p className="text-sm font-bold leading-tight">
                {item.snippet.title}
              </p>
              <p className="text-gray-400 text-xs">
                {item.snippet.channelTitle}
              </p>
              <p className="text-gray-400 text-xs">
                {formatView(item.statistics.viewCount)}
              </p>
              <p className="text-gray-400 text-xs">
                {video.snippet.publishedAt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Detail;
