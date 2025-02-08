import useVideoCard from "./useVideoCard";
import { formatDuration } from "../../../../utils/trending/formatDuration";
import { formatRelativeTime } from "../../../../utils/trending/formatRelativeTime";
import { formatNumber } from "../../../../utils/trending/formatNumber";
import PropTypes from "prop-types";

const VideoCard = ({ video }) => {

    const {
        navigate,
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    } = useVideoCard();

    return (
        <div
            className="w-[70%] flex justify-between gap-2 group/card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/videoDetail/${video.id}`)}
        >
            <div className="relative w-[400px] h-[210px] mr-3">

                {isHovered ? (
                    <iframe
                        className="w-[400px] h-[210px]"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        className="rounded-xl object-cover w-[400px] h-[210px]"
                    />
                )}

                <div className="absolute right-[10px] bottom-[10px] bg-black rounded-md p-1 group-hover/card:hidden">
                    <p className="text-white text-xs">{formatDuration(video.contentDetails?.duration || "00:00")}</p>
                </div>
            </div>

            <div className="flex flex-col flex-1 gap-2 mt-2 cursor-pointer">

                <p className="text-xl line-clamp-2">{video.snippet.title}</p>

                <p className="text-xs text-gray-600">{video.snippet.channelTitle} • {formatNumber(video.statistics?.viewCount) || "N/A"} lượt xem • {formatRelativeTime(video.snippet.publishedAt)}</p>

                <p className="text-xs text-gray-600 line-clamp-2">{video.snippet.description}</p>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
};

VideoCard.propTypes = {
    video: PropTypes.object.isRequired,
};

export default VideoCard;