import { useRef } from "react";
import { Box, Chip, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const categories = [
  "All",
  "Gaming",
  "Live",
  "Music",
  "Premier League",
  "League of Legends World Championship",
  "Teamfight Tactics",
  "Youth music",
  "Mixes",
  "Lo-fi",
  "Valorant",
  "Championships",
  "Asian music",
  "Trailers",
  "LaLiga",
  "Thrillers",
  "Deep House",
  "Youth music",
  "Mixes",
  "Cristiano Ronaldo",
  "Lo-fi",
  "Playlists",
  "Albums",
  "Pop Music",
  "Recently uploaded",
];

const CategoryBar = ({ onCategorySelect }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", padding: "8px" }}>
      <IconButton onClick={scrollLeft} sx={{ color: "white" }}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box
        ref={scrollRef}
        sx={{
          width: "1000px",
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          flex: 1,
          gap: "8px",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((category, index) => (
          <Chip
            key={index}
            label={category}
            onClick={() => onCategorySelect(category)}
            sx={{
              cursor: "pointer",
              backgroundColor: "lightgray",
              "&:hover": {
                backgroundColor: "",
              },
            }}
          />
        ))}
      </Box>
      <IconButton onClick={scrollRight} sx={{ color: "white" }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CategoryBar;
