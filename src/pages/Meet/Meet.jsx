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
           <Card key={idx} className="meetCard" sx={{overflowY:'scroll'}}>
              <CardHeader className="meetCardHeader" title={elem.name}  />
              <CardContent className="meetContentCard"> 
             
                {elem.appointments && elem.appointments.length>0 ? (elem.appointments.map((elem, id) => {
                  return <OneMeet item={elem} key={id} handleReload={setReload}/>;
                })):(<h5>No appointments found for this user</h5>)}
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
    <Card className="newMeet" sx={{paddingTop:"350px",paddingBottom:"50px"}} >      
     <div className="displayUserButton" 
     >

<Link to={"/meet/create"}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{fontSize:"25px",}}
        >
          New meet
        </Button>        
      </Link>
     </div>
      <div className="displayUserMeets" sx={{overflowY:"scroll"}}>
      
      {displayUserMeets()}
      </div>
    </Card>
  );
};

export default Meet;
