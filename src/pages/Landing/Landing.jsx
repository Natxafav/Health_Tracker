import React from "react";
import "./landing.css";
import Login from "../Login/Login";

import { Box, Grid, Container, Typography, Button } from "@mui/material";
import AboutUs from "../../components/AboutUs/AboutUs";
const Landing = () => {
  return (
    <Grid container  sx={{ width: "100vw" }} className="landingContainer">   
    <Grid item xs={12} md={12}  sx={{ width: "100vw" }} className="landingContainer">   
     
      <Grid item xs={12} md={6}  lg={5} className="loginContainer">        
          <Login />        
      </Grid>
      <Grid item xs={12} md={6} lg={6}className="textContainer">      
          <AboutUs />
      </Grid>
      </Grid>
    </Grid>
  );
};
export default Landing;
