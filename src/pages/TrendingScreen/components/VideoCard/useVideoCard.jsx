import { useState } from "react";
import { useNavigate } from "react-router";

const useVideoCard = () => {

    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return {
        navigate,
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    };
};

export default useVideoCard;