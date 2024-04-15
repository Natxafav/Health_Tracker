import { useEffect, useState } from "react";
import { getAllAppointmentsUser } from "../../services/meets";
import { Card, CardContent, CardHeader, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OneMeet from "../../components/OneMeet/OneMeet";
import "./meet.css";

const Meet = () => {
  const [familyMeets, setFamilyMeets] = useState([]);

  const retrievefamilyMeets = async () => {
    const res = await getAllAppointmentsUser();
    setFamilyMeets(res);
  };

  const displayUserMeets = () => {
    const display = familyMeets ? (
      familyMeets.map((elem, idx) => {
        return (
          <Card key={idx} className="meetCard" sx={{ overflowY: "scroll" }}>
            <CardHeader className="meetCardHeader" title={<Typography variant="h5" color="rgb(7, 150, 151)"sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          {elem.name}
        </Typography>} />
            <CardContent
              className="meetContentCard"
              sx={{
                width: "90%",
                display: "flex",
                flexDirection: "row",
                alignItems: "space-evenly",
                justifyContent: "start",
                flexWrap: "wrap",
                gap: "20px",
                paddingBottom: "200px",
               
                margin:"0 auto"
              }}
            >
              {elem.appointments && elem.appointments.length > 0 ? (
                elem.appointments.map((elem, id) => {
                  return (
                    <OneMeet item={elem} key={id} handleReload={setReload} />
                  );
                })
              ) : (
                <h5>No appointments found for this user</h5>
              )}
            </CardContent>
          </Card>
        );
      })
    ) : (
      <h1>No appointments found</h1>
    );
    return display;
  };
  const [reload, setReload] = useState(false);

  useEffect(() => {
    retrievefamilyMeets();
  }, [reload]);

  return (
    <Card sx={{ width: "90%", height: "80vh", overflowY: "scroll" }}>
      <Link to={"/meet/create"}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: "50px",
            fontSize: "20px",
            fontWeight: "800",
            width: "200px",
            margin: "50px 0px 0px 1250px", 
            color: "white",
            backgroundColor: "rgb(7, 150, 151)",
            ":hover": {
              backgroundColor: "green",
              color: "yellow",
              fontSize: "15px",
              transition: "0.5s",
            },
            position: "fixed", 
            top:"30px", 
            right:"50px"
          }}
        >
          New
        </Button>
      </Link>

     {displayUserMeets()}
    </Card>
  );
};

export default Meet;
