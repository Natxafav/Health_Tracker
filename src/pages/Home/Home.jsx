import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import Alltask from "../../components/Alltask/Alltask";
function Home() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={2} lg={4}>
          <Card sx={{ height: "100vh", padding: "10px"}}>
            <CardHeader title="Health Tracker v0.1"></CardHeader>
            <CardContent>
              <p> Bienvenidos a la version 0.1 de Health tracker, la aplicación está en una versión muy temprana de desarrollo pendiente de añadir diferentes funcionalidades</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
          <Card sx={{ height: "100vh", overflowY: "auto", scrollBehavior: "smooth" }}>
            <CardHeader title="Today tasks"></CardHeader>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Alltask />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
