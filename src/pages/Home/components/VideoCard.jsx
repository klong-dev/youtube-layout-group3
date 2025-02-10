import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const videoId = video.id.videoId || video.id; // Extract video ID

  const handleVideoClick = () => {
    navigate(`/video/${videoId}`); // Navigate to the video playback page
  };

  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        width: "330px",
        boxShadow: "none",
        borderRadius: "8px",
        cursor: "pointer", // Add a pointer cursor to indicate interactivity
      }} // Trigger navigation on click
    >
      {/* Video Thumbnail */}
      <CardMedia
        component="img"
        height="170"
        image={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        sx={{ borderRadius: "8px" }}
        onClick={handleVideoClick}
      />

      {/* Video Details */}
      <CardContent
        sx={{
          color: "white",
          display: "flex",
          padding: "8px 0",
          alignItems: "flex-start",
        }}
      >
        {/* Channel Avatar */}
        <Avatar
          alt={video.snippet.channelTitle}
          src={video.snippet.thumbnails.default.url} // Placeholder if available
          sx={{
            width: 40,
            height: 40,
            marginRight: "8px",
          }}
        />

        {/* Video Title and Channel Info */}
        <Box onClick={handleVideoClick}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "20px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "240px",
            }}
          >
            {video.snippet.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "gray",
              fontSize: "12px",
            }}
          >
            {video.snippet?.channelTitle}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "gray",
              fontSize: "12px",
            }}
          >
            {video.snippet.publishedAt}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

VideoCard.propTypes = {
  video: PropTypes.objectOf({
    id: PropTypes.any,
    snippet: PropTypes.any,
  }),
};

export default VideoCard;
