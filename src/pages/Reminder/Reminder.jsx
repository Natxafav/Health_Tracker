import { useEffect, useState } from "react";
import { getAllReminderUser } from "../../services/reminder";
import { Card, CardContent, CardHeader, Button,Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OneReminder from "../../components/OneReminder/OneReminder";

const Reminder = () => {
  const [reminders, setReminders] = useState([]);

  const retrievereminders = async () => {
    const res = await getAllReminderUser();
    setReminders(res);
  };

  const displayUserReminders = () => {
    const display = reminders ? (
      reminders.map((elem, idx) => {
        return (
          <Card key={idx} sx={{ overflowY: "scroll" }}>
            <CardHeader title={<Typography variant="h5" color="rgb(7, 150, 151)"sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          {elem.name}
        </Typography>} />
            <CardContent
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
              {elem.Reminders && elem.Reminders.length > 0 ? (
                elem.Reminders.map((elem, id) => {
                  return (
                    <OneReminder
                      item={elem}
                      key={id}
                      handleReload={setReload}
                    />
                  );
                })
              ) : (
                <h2>No reminder avaliable for this user</h2>
              )}
            </CardContent>
          </Card>
        );
      })
    ) : (
      <h1>No reminder avaliable</h1>
    );
    return display;
  };
  const [reload, setReload] = useState(false);

  useEffect(() => {
    retrievereminders();
  }, [reload]);

  return (
    <Card
      className="remminderContainer"
      sx={{ width: "90%", height: "80vh", overflowY: "scroll" }}
    >
      <Link to={"/reminder/create"}>
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
            top:"100px", 
            right:"50px"
          }}
        >
          New
        </Button>
      </Link>
      {displayUserReminders()}
    </Card>
  );
};

export default Reminder;
