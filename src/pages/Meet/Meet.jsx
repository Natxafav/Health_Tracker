import { useEffect, useState } from "react";
import { getAllAppointmentsUser } from "../../services/meets";
import { Card, CardContent, Grid, CardHeader, Button } from "@mui/material";
import { Link } from "react-router-dom";
import OneMeet from "../../components/OneMeet/OneMeet";
import './meet.css'

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
          <Card key={idx} className="meetCard">
            <CardHeader className="meetCardHeader" title={elem.name} />
            <CardContent className="meetContentCard">

              {elem.appointments && elem.appointments.length > 0 ? (elem.appointments.map((elem, id) => {
                return <OneMeet item={elem} key={id} handleReload={setReload} />;
              })) : (<h5>No appointments found for this user</h5>)}
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
    <Card className="newMeet" sx={{ paddingTop: "350px", paddingBottom: "50px" }} >

      <div className="displayUserButton">
        <Link to={"/meet/create"}>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontSize: "20px", width: '200px', top: '3px', position: 'absolute', margin: "60px 0px 0px 600px", background: "rgb(7,150,151)", fontWeight: 'bold', ":hover": { backgroundColor: "black", fontSize: "15px", transition: "0.5s"} }}>
            New meet
          </Button>
        </Link>
      </div>
      <div className="displayUserMeets">
        {displayUserMeets()}
      </div>
    </Card>
  );
};

export default Meet;
