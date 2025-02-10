import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsIcon from "@mui/icons-material/Sports";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";

const PopUpMenu = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{
          width: 250,
          padding: "16px 8px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
      >
        {/* Top Section */}
        <Box>
          {/* Main Menu */}
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PlayCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Shorts" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText primary="Subscriptions" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="You" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="History" />
              </ListItemButton>
            </ListItem>
          </List>

          {/* Sign In Section */}
          <Box sx={{ padding: "16px" }}>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Sign in to like videos, comment, and subscribe.
            </Typography>
            <Button
              variant="outlined"
              size="small"
              startIcon={<PersonIcon />}
              sx={{ marginTop: "8px", width: "100%", textTransform: "none" }}
            >
              Sign in
            </Button>
          </Box>
          <Divider />

          {/* Explore Section */}
          <List
            subheader={
              <Typography sx={{ padding: "8px 16px", fontWeight: "bold" }}>
                Explore
              </Typography>
            }
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TrendingUpIcon />
                </ListItemIcon>
                <ListItemText primary="Trending" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MusicNoteIcon />
                </ListItemIcon>
                <ListItemText primary="Music" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Gaming" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SportsIcon />
                </ListItemIcon>
                <ListItemText primary="Sports" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />

          {/* More from YouTube */}
          <List
            subheader={
              <Typography sx={{ padding: "8px 16px", fontWeight: "bold" }}>
                More from YouTube
              </Typography>
            }
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <YouTubeIcon sx={{ color: "red" }} />
                </ListItemIcon>
                <ListItemText primary="YouTube Premium" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MusicNoteIcon sx={{ color: "red" }} />
                </ListItemIcon>
                <ListItemText primary="YouTube Music" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ChildCareIcon sx={{ color: "red" }} />
                </ListItemIcon>
                <ListItemText primary="YouTube Kids" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />

          {/* Additional Options */}
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FlagIcon />
                </ListItemIcon>
                <ListItemText primary="Report history" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FeedbackIcon />
                </ListItemIcon>
                <ListItemText primary="Send feedback" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        {/* Footer Section */}
        <Box sx={{ padding: "16px" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ lineHeight: "1.5", fontSize: "12px" }}
          >
            About &nbsp; Press &nbsp; Copyright <br />
            Contact us &nbsp; Creators <br />
            Advertise &nbsp; Developers <br />
            <br />
            Terms &nbsp; Privacy &nbsp; Policy & Safety <br />
            How YouTube works <br />
            Test new features
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: "16px", fontSize: "12px" }}
          >
            © 2025 Google LLC
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default PopUpMenu;
