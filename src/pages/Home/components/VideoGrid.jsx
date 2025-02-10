import { Grid2, Box } from "@mui/material";
import VideoCard from "./VideoCard"; // VideoCard component for individual videos

const VideoGrid = ({ videos }) => {
  return (
    <Box
      sx={{
        maxWidth: "1500px",
      }}
    >
      <Grid2 container spacing={{ xs: 2, md: 3 }}>
        {videos?.map((video, key) => (
          <Grid2
            key={video.id.videoId || video.id}
            size={{ xs: 12, sm: 4, md: 4, lg: 3, xl: 3 }}
          >
            <VideoCard video={video} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default VideoGrid;
