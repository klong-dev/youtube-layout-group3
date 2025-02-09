import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const useVideoCard = () => {

    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClick = () => {
        setIsClicked(true); // Bật hiệu ứng màu
        setIsOpen(!isOpen);
    
        // Sau 200ms, reset màu về bình thường
        setTimeout(() => {
          setIsClicked(false);
        }, 200);
      };

    return {
        navigate,
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
        isOpen,
        setIsOpen,
        menuRef,
        isClicked,
        handleClick,
    };
};

export default useVideoCard;