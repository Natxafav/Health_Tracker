import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MedicationCreate from "../../components/Medication/MedicationCreate";
import { Button, Grid, TextField } from "@mui/material";

function Home() {
  return (
    <Grid container xs={12} md={11} lg={11} columnSpacing={1} rowSpacing={1}>
      <Grid container xs={6} md={4} lg={4} columnSpacing={1} rowSpacing={1}>
        <Grid item xs={12} md={12} lg={10}>
          <Link to={"/family"}>
            <Button variant="contained" color="primary" fullWidth sx={{height:'40px'}}>
              Family
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={12} lg={10}>
          <Link to={"/meds"}>
            <Button variant="contained" color="primary" fullWidth>
              Medication
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={12} lg={10}>
          <Link to={"/meet"}>
            <Button variant="contained" color="primary" fullWidth>
              Appointments
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={12} lg={10}>
          <Link to={"/reminder"}>
            <Button variant="contained" color="primary" fullWidth>
              Reminders
            </Button>
          </Link>
        </Grid>
      </Grid>


      <Grid container xs={6} md={4} lg={6} >
        
      </Grid>
    </Grid>
  );
}

export default Home;
