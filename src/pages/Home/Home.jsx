import CategoryBar from "@/pages/Home/components/CategoryBar";
import VideoGrid from "@/pages/Home/components/VideoGrid";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchVideosByCategory = async (category) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search`,
        {
          params: {
            part: "snippet",
            type: "video",
            maxResults: 20,
            q: category === "All" ? "" : category,
            key: import.meta.env.VITE_API_KEY,
          },
        }
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching category videos:", error.message);
    }
  };

  const fetchDefaultVideos = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/videos`,
        {
          params: {
            part: "snippet,statistics",
            chart: "mostPopular",
            regionCode: "US",
            maxResults: 20,
            key: import.meta.env.VITE_API_KEY,
          },
        }
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching default videos:", error.message);
    }
  };
  const handleSearch = async (query) => {
    if (!query.trim()) {
      fetchDefaultVideos();
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search`,
        {
          params: {
            part: "snippet",
            maxResults: 20,
            q: query,
            key: import.meta.env.VITE_API_KEY,
          },
        }
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      fetchDefaultVideos();
    } else {
      fetchVideosByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            top: 0,
            backgroundColor: "",
            marginBottom: "8px",
            paddingLeft: "",
          }}
        >
          <div>
            <Box sx={{ paddingTop: "50px" }}>
              <CategoryBar
                onCategorySelect={(category) => setSelectedCategory(category)}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "",
                gap: "10px",
                justifyContent: "center",
                alignContent: "space-between",
              }}
            >
              <VideoGrid videos={videos} />
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
