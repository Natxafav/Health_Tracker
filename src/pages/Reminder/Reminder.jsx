import { useEffect, useState } from "react";
import { getAllReminderUser } from "../../services/reminder";
import {
  Card,
  CardContent, 
  CardHeader,
  Button,
 
} from "@mui/material";
import { Link } from "react-router-dom";
import OneReminder from "../../components/OneReminder/OneReminder";


const Reminder = () => {

    const [reminders, setReminders] = useState([]);

    const retrievereminders = async () => {
      const res = await getAllReminderUser();  
      setReminders(res);
    
    };
  
    const displayUserReminders = () => {
      const display =
      reminders?(
          
          reminders.map((elem, idx) => {
            return (
              <Card key={idx} sx={{overflowY:'scroll'}}>
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
                  {elem.Reminders.length >0? (elem.Reminders.map((elem, id) => {
                    return <OneReminder item={elem} key={id} handleReload={setReload}/>;
                  })):(<h2>No reminder found</h2>)}
                </CardContent>
              </Card>
            );
          })
        ) : (
          <h1>No reminder avaliable</h1>
        );
      return display;
    };
    const [reload, setReload] = useState(false)
  
    useEffect(() => {
      retrievereminders();
      console.log(reload)
    }, [reload]);
  
    return <Card sx={{ width: "90%",  height:'80vh', overflowY:'scroll'}}>
       <Link to={"/reminder/create"}>
              <Button variant="contained" color="primary" fullWidth sx={{height:'5vh'}}>
                New reminder
              </Button>
              </Link>
      {displayUserReminders()}
      
      </Card>;
}

export default Reminder