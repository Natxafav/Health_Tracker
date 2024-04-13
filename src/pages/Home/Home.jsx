import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MedicationCreate from "../../components/Medication/MedicationCreate";
import { Button, Card, CardContent, CardHeader, Grid, TextField } from "@mui/material";

function Home() {
  return (
    <Card sx={{ height:"100%", width: "100%" }}>
      <CardContent>
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item xs={6} md={4} lg={4} >
            <Grid container columnSpacing={4} rowSpacing={4}>
              <Grid item xs={12} md={8} lg={8}>
                <Link to={"/family"}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ height: "80px", backgroundColor: "rgb(7,150,151)", ":hover": { backgroundColor: "rgb(7,150,151)", color: 'yellow', transition: '0.3s', fontSize: '20px' } }}
                  >
                    Family
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Link to={"/meds"}>
                  <Button variant="contained" color="primary" fullWidth sx={{ height: "80px", backgroundColor: "rgb(7,150,151)", ":hover": { backgroundColor: "rgb(7,150,151)", color: 'yellow', transition: '0.3s', fontSize: '20px' } }} >
                    Medication
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Link to={"/meet"}>
                  <Button variant="contained" color="primary" fullWidth sx={{ height: "80px", backgroundColor: "rgb(7,150,151)", ":hover": { backgroundColor: "rgb(7,150,151)", color: 'yellow', transition: '0.3s', fontSize: '20px' } }}>
                    Appointments
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Link to={"/reminder"}>
                  <Button variant="contained" color="primary" fullWidth sx={{ height: "80px", backgroundColor: "rgb(7,150,151)", ":hover": { backgroundColor: "rgb(7,150,151)", color: 'yellow', transition: '0.3s', fontSize: '20px' } }}>
                    Reminders
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item xs={6} md={4} lg={4} columnSpacing={1} rowSpacing={1}>
              <h1>Content from urgency tasks</h1>
            </Grid>
          </Grid>
        </Grid>
        <Card sx={{ width: "300px" , padding: "10px", margin: "10px"}}>
          <CardHeader title="Health Tracker v0.1"></CardHeader>
          <CardContent>
            <p> Bienvenidos a la version 0.1 de Health tracker, la aplicación está en una versión muy temprana de desarrollo pendiente de añadir diferentes funcionalidades</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default Home;
