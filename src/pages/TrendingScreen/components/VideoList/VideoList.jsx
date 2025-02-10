import VideoCard from "../VideoCard/VideoCard";
import useVideoList from "./useVideoList";
import PropTypes from "prop-types";

const VideoList = ({categoryId}) => {
    const {
        videos,
        loading,
        error,
        visibleVideos,
        isExpanded,
        handleShowMore,
    } = useVideoList(categoryId);


    if (loading.fetchVideos) return <p>Đang tìm kiếm...</p>;
    if (error.fetchVideos) return <p>Lỗi tìm kiếm: {error.fetchVideos}</p>;

    return (
        <div className={`w-full flex flex-col gap-4`}>
            {videos.slice(0, visibleVideos).map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}

            {/* Load more */}
            {!isExpanded && visibleVideos < videos.length && (
                <div className={`my-6 flex justify-center`}>
                    <button
                        onClick={handleShowMore}
                        className="flex items-center text-sm group cursor-pointer px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 transition-transform duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 group-hover:translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                        Hiển thị thêm
                    </button>
                </div>
            )}
        </div>
    );
};

VideoList.propTypes = {
    categoryId: PropTypes.string,
};

export default VideoList;