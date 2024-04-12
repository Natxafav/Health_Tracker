import React, { useState } from "react";
import "./header.css";
import { Link, useNavigate, } from "react-router-dom";

import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu as CardMenu,
  MenuItem,
  Button,
} from "@mui/material";
import DrawerComp from "../Drawer/DrawerComp";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  return (
    <>

    <AppBar position="absolute" className="header">
      
      <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 4 }}
          >
          <MenuIcon />
        </IconButton>
        <CardMenu open={isMenuOpen} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem>CONTACT</MenuItem>
          <MenuItem>ABOUT</MenuItem>
          {localStorage.getItem("Authorization") && (
            <MenuItem
            onClick={() => {
              handlelogout();
            }}
            >
              LOGOUT
            </MenuItem>
          )}
        </CardMenu>
        <Typography variant="h6" color="inherit" component="div"></Typography>
      </Toolbar>
    </AppBar>
          </>
  );
}

export default Header;
