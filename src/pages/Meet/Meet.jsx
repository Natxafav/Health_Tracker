import { useEffect, useState } from "react";
import { getAllAppointmentsUser } from "../../services/meets";
import {
  Card,
  CardContent,
 
  CardHeader,
  Button,
 
} from "@mui/material";
import { Link } from "react-router-dom";
import OneMeet from "../../components/OneMeet/OneMeet";

const Meet = () => {

    const [familyMeets, setFamilyMeets] = useState([]);

    const retrievefamilyMeets = async () => {
      const res = await getAllAppointmentsUser();
  
      setFamilyMeets(res);
    };
  
    const displayUserMeets = () => {

        console.log(familyMeets)
      const display =
      familyMeets?(
          
          familyMeets.map((elem, idx) => {
            return (
              <Card key={idx}>
                <CardHeader title={elem.name} />
                <CardContent
                  sx={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "space-evenly",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    gap: '20px' ,
                    paddingBottom: "200px",
                  }}
                >
                  <OneMeet item={elem} key={idx} handleReload={setReload}/>;
                </CardContent>
              </Card>
            );
          })
        ) : (
          <h1>No hay Citas almacenadas</h1>
        );
      return display;
    };
    const [reload, setReload] = useState(false)
  
    useEffect(() => {
      retrievefamilyMeets();
      console.log(reload)
    }, [reload]);
  
    return <Card sx={{ width: "90%",  height:'80vh', }}>
       <Link to={"/meet/create"}>
              <Button variant="contained" color="primary" fullWidth sx={{height:'5vh'}}>
                New meet
              </Button>
              </Link>
      {displayUserMeets()}
      
      </Card>;
}

export default Meet