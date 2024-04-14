import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardHeader, Grid} from "@mui/material";
import Alltask from "../../components/Alltask/Alltask";
function Home() {
  return (
<>



        
        <Card sx={{ width: "300px" , padding: "10px", margin: "10px"}}>
          <CardHeader title="Health Tracker v0.1"></CardHeader>
          <CardContent>
            <p> Bienvenidos a la version 0.1 de Health tracker, la aplicación está en una versión muy temprana de desarrollo pendiente de añadir diferentes funcionalidades</p>
          </CardContent>
        </Card>
</>
     
  );
}

export default Home;
