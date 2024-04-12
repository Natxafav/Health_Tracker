import { useEffect, useState } from "react";
import { getAllAppointmentsUser } from "../../services/meets";
import { Card, CardContent, Grid, CardHeader, Button } from "@mui/material";
import { Link } from "react-router-dom";
import OneMeet from "../../components/OneMeet/OneMeet";

const Meet = () => {
  const [familyMeets, setFamilyMeets] = useState([]);

  const retrievefamilyMeets = async () => {
    const res = await getAllAppointmentsUser();

    setFamilyMeets(res);
  };

  const displayUserMeets = () => {
    const display = familyMeets ? (
      <Card
        className="mainContain"
     
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "20px",
          paddingBottom: "200px",
         
        }}
      >
        {familyMeets.map((elem, idx) => {       
        
          return (
           <Card key={idx} sx={{overflowY:'scroll'}}>
              <CardHeader title={elem.name} />
              <CardContent className="mainContentCard"> 
             
                {elem.appointments.map((elem, id) => {
                  return <OneMeet item={elem} key={id} handleReload={setReload}/>;
                })}
              </CardContent>
            </Card> 
          );
        })}
      </Card>
    ) : (
      <h1>No hay Citas almacenadas</h1>
    );
    return display;
  };
  const [reload, setReload] = useState(false);

  useEffect(() => {
    retrievefamilyMeets();
    
  }, [reload]);

  return (
    <Card className="NewMeet" sx={{ width: "90%", height: "80vh", overflowY:'scroll' }}>
      <Link to={"/meet/create"}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ height: "5vh" }}
        >
          New meet
        </Button>
      </Link>
      {displayUserMeets()}
    </Card>
  );
};

export default Meet;
