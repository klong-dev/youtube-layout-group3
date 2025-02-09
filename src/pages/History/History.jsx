import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TfiTrash } from "react-icons/tfi";
import { HiOutlinePause } from "react-icons/hi2";
import { FiX, FiMoreVertical } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getWatchedVideos, groupByDate } from "../../utils/history";

function HistoryPage() {
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    setWatchedVideos(getWatchedVideos());
  }, []);

  const groupedVideos = groupByDate(watchedVideos);

  const toggleMenu = (id) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  return (
    <div className="pt-20">
      <h1 className="text-3xl text-gray-600 font-bold pl-48 pt-6 pb-1">
        Watch history
      </h1>
      <div className="flex w-full max-w-screen-xl pl-48 gap-10">
        {/* Video */}
        {watchedVideos.length === 0 ? (
          <p className="text-gray-600">No videos watched yet.</p>
        ) : (
          <div className="flex-1 space-y-6">
            {Object.keys(groupedVideos).map((date) => (
              <div key={date} className="mb-6">
                <h2 className="text-xl text-gray-600 font-semibold pt-6 pb-2">
                  {date}
                </h2>
                <div className="space-y-4">
                  {groupedVideos[date].map((video) => (
                    <div
                      key={video.id}
                      className="flex items-start space-x-4 relative"
                    >
                      <img
                        src={video.thumbnails.medium.url}
                        alt={video.title}
                        className="w-55 h-31 object-cover rounded-md cursor-pointer"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold line-clamp-2 text-gray-800 cursor-pointer">
                            {video.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <button className="text-gray-500 hover:text-gray-600 transition-colors text-2xl font-bold p-2 rounded-full hover:bg-gray-200 cursor-pointer relative group">
                              <FiX />
                              <span className="absolute left-1/2 transform -translate-x-1/2 top-14 w-35 bg-gray-500 text-gray-700 text-sm rounded-md py-2 px-3 opacity-0 group-hover:opacity-80 transition-opacity text-left">
                                Remove from
                                <br />
                                watch history
                              </span>
                            </button>
                            <button
                              className="text-gray-500 text-xl font-bold cursor-pointer"
                              onClick={() => toggleMenu(video.id)}
                            >
                              <FiMoreVertical />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {video.channelTitle} • {video.viewCount} views
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-[8px] pt-[8px]">
                          {video.description}
                        </p>
                        {menuOpen === video.id && (
                          <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md w-48 z-10 py-2.5">
                            <ul className="text-sm text-gray-700">
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Add to queue
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Save to Watch Later
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Save to playlist
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Download
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Share
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Setting */}
        <div className="w-64 sticky top-45 self-start mt-2 mb-[50px] mx-0 py-0 px-7">
          <div className="mb-4 flex items-center border-b pb-2 sticky top-20 z-10">
            <CiSearch className="text-gray-600 text-2xl mr-2" />
            <input
              type="text"
              placeholder="Search watch history"
              className="w-full p-2 focus:outline-none border-none bg-transparent placeholder-gray-600"
            />
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-2 cursor-pointer font-semibold p-2 rounded-full hover:bg-gray-300 transition">
              <TfiTrash className="text-gray-600 text-xl" />
              <span>Clear all watch history</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer font-semibold p-2 rounded-full hover:bg-gray-300 transition">
              <HiOutlinePause className="text-gray-600 text-xl" />
              <span>Pause watch history</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer font-semibold p-2 rounded-full hover:bg-gray-300 transition">
              <IoSettingsOutline className="text-gray-600 text-xl" />
              <span>Manage all history</span>
            </li>
            <li className="text-gray-600 cursor-pointer pt-0 pr-9 pb-0 pl-4">
              Comments
            </li>
            <li className="text-gray-600 cursor-pointer pt-0 pr-9 pb-0 pl-4">
              Posts
            </li>
            <li className="text-gray-600 cursor-pointer pt-0 pr-9 pb-0 pl-4">
              Live chat
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
