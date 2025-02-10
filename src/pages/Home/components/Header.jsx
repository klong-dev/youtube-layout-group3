import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "@/pages/Home/components/SearchBar";
import PopUpMenu from "@/pages/Home/components/PopUpMenu";
import PersonIcon from "@mui/icons-material/Person"; // Import the PopUpMenu component

const Header = ({ onSearch }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="static"
        style={{ backgroundColor: "", color: "black", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* Left Side: Menu Button and Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            {/* Menu Button */}
            <IconButton edge="start" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            {/* YouTube Logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube Logo"
              style={{ height: "24px", marginLeft: "8px" }}
            />
            <Typography
              variant="caption"
              style={{ marginLeft: "4px", fontSize: "12px" }}
            >
              VN
            </Typography>
          </div>

          {/* Center: Search Bar */}
          <div
            style={{
              flex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Right Side: Sign In Button */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              size="small"
              startIcon={<PersonIcon />}
              sx={{
                marginTop: "8px",
                width: "25%",
                textTransform: "none",
                borderRadius: "50px",
              }}
            >
              Sign in
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Pop-Up Menu */}
      <PopUpMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
