import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaThumbsUp, FaThumbsDown, FaCommentAlt, FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { SHORTS_API_KEY } from "../../apis/shorts"; // Import API Key

export function Shorts() {
  const [shorts, setShorts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    fetchShorts();
    setupIntersectionObserver();
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const setupIntersectionObserver = () => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Pause all videos first
          const videos = document.querySelectorAll('.short-video');
          videos.forEach(video => {
            video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          });

          // Play only the visible video
          if (entry.isIntersecting) {
            const video = entry.target;
            const index = parseInt(video.dataset.index);
            setCurrentIndex(index);
            video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }
        });
      },
      {
        threshold: 0.7
      }
    );
  };

  const fetchShorts = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&videoDuration=short&q=shorts&key=${SHORTS_API_KEY}`
      );
      setShorts(response.data.items);
    } catch (error) {
      console.error("Error fetching Shorts:", error);
    }
  };

  useEffect(() => {
    const videos = document.querySelectorAll('.short-video');
    videos.forEach(video => {
      if (observerRef.current) {
        observerRef.current.observe(video);
      }
    });
  }, [shorts]);

  if (!shorts.length) return <div className="text-white text-center py-20">Loading Shorts...</div>;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black overflow-y-scroll scrollbar-hide snap-y snap-mandatory"
    >
      {shorts.map((short, index) => {
        const videoId = short.id.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=${index === 0 ? 1 : 0}&mute=0&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1`;
        
        return (
          <div 
            key={videoId}
            className="h-screen w-full relative snap-start snap-always"
          >
            <iframe
              data-index={index}
              className="short-video absolute inset-0 w-full h-full"
              src={videoUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {/* Right Side Actions */}
            <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4">
              {/* Like Button */}
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-zinc-800/60">
                  <FaThumbsUp className="text-white text-xl" />
                </button>
                <span className="text-white text-[13px] font-medium mt-1.5">1,3 Tr</span>
              </div>

              {/* Dislike Button */}
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-zinc-800/60">
                  <FaThumbsDown className="text-white text-xl" />
                </button>
                <span className="text-white text-[13px] font-medium mt-1.5">Không thích</span>
              </div>

              {/* Comment Button */}
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-zinc-800/60">
                  <FaCommentAlt className="text-white text-xl" />
                </button>
                <span className="text-white text-[13px] font-medium mt-1.5">2,4K</span>
              </div>

              {/* Share Button */}
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-zinc-800/60">
                  <FaShare className="text-white text-xl" />
                </button>
                <span className="text-white text-[13px] font-medium mt-1.5">Chia sẻ</span>
              </div>

              {/* More Options Button */}
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-zinc-800/60">
                  <BsThreeDots className="text-white text-2xl" />
                </button>
              </div>
            </div>

            {/* Video Details */}
            <div className="absolute bottom-4 left-4 right-16 z-10">
              <h3 className="text-white font-medium text-[15px]">@{short.snippet.channelTitle}</h3>
              <p className="text-white text-sm mt-2 line-clamp-2 font-normal">{short.snippet.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
