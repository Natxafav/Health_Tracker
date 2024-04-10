import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MedicationCreate from "../../components/Medication/MedicationCreate";
import { Button, Grid, TextField } from "@mui/material";
import Urgency from "../../components/Urgency/Urgency";

function Home() {
  return (
    <Grid container columnSpacing={4} rowSpacing={4}>
      <Grid item xs={6} md={4} lg={4} >
      <Grid container columnSpacing={4} rowSpacing={4}>
        <Grid item xs={12} md={8} lg={8}>
          <Link to={"/family"}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ height: "40px" }}
            >
              Family
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Link to={"/meds"}>
            <Button variant="contained" color="primary" fullWidth>
              Medication
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Link to={"/meet"}>
            <Button variant="contained" color="primary" fullWidth>
              Appointments
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Link to={"/reminder"}>
            <Button variant="contained" color="primary" fullWidth>
              Reminders
            </Button>
          </Link>
        </Grid>
      </Grid>




      </Grid>
      <Grid item>
        <Grid item xs={6} md={4} lg={4} columnSpacing={1} rowSpacing={1}></Grid>
        <h1>Content from urgency tasks</h1>
        <Urgency/>
      </Grid>
    </Grid>
  );
}

export default Home;
