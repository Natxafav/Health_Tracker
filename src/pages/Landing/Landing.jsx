import React from "react";
import "./landing.css";
import Login from "../Login/Login";

import { Box, Grid, Container, Typography, Button } from "@mui/material";
import AboutUs from "../../components/AboutUs/AboutUs";

const Landing = () => {
  return (
    <Container className="landingContainer">
    <Grid container className="gridContainerLanding"> 
      <Grid item xs={12} md={4} lg={5} className="loginContainer">
        <Login />
      </Grid>
      <Grid item xs={12} md={6} lg={7} className="textContainer"sx={{justifyContent:'center'}}>
        <AboutUs />
      </Grid>
    </Grid>
  </Container>
  );
};
export default Landing;
