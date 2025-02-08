import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, fetchVideosByCategory } from "../../../../redux/trending/videos/thunks";

const useVideoList = (categoryId) => {

    const dispatch = useDispatch();
    const { videos, loading, error } = useSelector((state) => state.videos);

    useEffect(() => {
        if (categoryId === "0") {
        dispatch(fetchVideos());
    } else {
        dispatch(fetchVideosByCategory(categoryId));
    }
    }, [dispatch, categoryId]);

    const [visibleVideos, setVisibleVideos] = useState(12);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowMore = () => {
        setVisibleVideos((prev) => {
            const newVisibleVideos = prev + 12;
            if (newVisibleVideos >= videos.length) {
                setIsExpanded(true);
            }
            return newVisibleVideos;
        });
    };

    return {
        videos,
        loading,
        error,
        visibleVideos,
        isExpanded,
        handleShowMore,
    };
};

export default useVideoList;