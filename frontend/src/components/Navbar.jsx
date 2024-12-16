import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/whatblue.png";
import { FaUserAstronaut } from "react-icons/fa";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserMenuClick = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const menuItems = [
    { label: "Anasayfa", path: "/" },
    { label: "Filmler", path: "/films" },
    { label: "Hakkında", path: "/about" },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#0e3056" }}>
      <Toolbar>
        
        <img
          src={logo}
          alt="Logo"
          onClick={() => navigate("/")}
          style={{ width: "150px", marginRight: "20px" }}
        />

      
        <div style={{ flexGrow: 1 }} />

       
        <div className="menu-items">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              onClick={() => navigate(item.path)}
              sx={{
                marginLeft: "10px",
                fontFamily: "monospace",
                textTransform: "none",
                fontSize:"20px",
                fontFamily:"sans-serif"
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <IconButton
          color="inherit"
          onClick={handleUserMenuClick}
          sx={{ fontSize: "1.5rem", marginLeft: "10px" }}
        >
          <FaUserAstronaut />
        </IconButton>

        
        <Menu
          anchorEl={userMenuAnchorEl}
          open={Boolean(userMenuAnchorEl)}
          onClose={handleUserMenuClose}
        >
          <MenuItem
            onClick={() => {
              navigate("/profile");
              handleUserMenuClose();
            }}
          >
            Profilim
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/settings");
              handleUserMenuClose();
            }}
          >
            Ayarlar
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/logout");
              handleUserMenuClose();
            }}
          >
            Çıkış Yap
          </MenuItem>
        </Menu>

       
        <IconButton
          color="inherit"
          onClick={handleMenuClick}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

    
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => {
                navigate(item.path);
                handleMenuClose();
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
