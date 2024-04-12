import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, Typography, Card, Icon } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import AddHomeTwoToneIcon from "@mui/icons-material/AddHomeTwoTone";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MedicationIcon from "@mui/icons-material/Medication";
import TaskIcon from "@mui/icons-material/Task";
import LogoutIcon from '@mui/icons-material/Logout';

function DrawerComp() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handlelogout = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("roleId");
    localStorage.removeItem("email");
    navigate("/");
  };


  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "87vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-evenly",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <>
        <Link to="/home">
          <Button>
            <AddHomeTwoToneIcon />
            <Typography variant="h6" component="h6" sx={{ color: "blue" }}>
              HOME
            </Typography>
          </Button>
        </Link>

        <Divider />
      </>
      <>
        <Link to="/family">
          <Button>
            <FamilyRestroomIcon />
            <Typography variant="h6" component="h6" sx={{ color: "blue" }}>
              FAMILY
            </Typography>
          </Button>
        </Link>
        <Link to="/meet">
          <Button>
            <EventAvailableIcon />
            <Typography variant="h6" component="h6" sx={{ color: "blue" }}>
              APPOINTMENTS
            </Typography>
          </Button>
        </Link>
        <Link to="/meds">
          <Button>
            <MedicationIcon />
            <Typography variant="h6" component="h6" sx={{ color: "blue" }}>
              MEDICINES
            </Typography>
          </Button>
        </Link>
        <Link to="/meds">
          <Button>
            <TaskIcon />
            <Typography variant="h6" component="h6" sx={{ color: "blue" }}>
              REMINDERS
            </Typography>
          </Button>
        </Link>
        <Divider />
      </>
      <>
        <Link to="/meds">
          <Button onClick={() => {
                  handlelogout();
                }}>
            
              <LogoutIcon/>
                

                <Typography variant="h6" component="h6" sx={{ color: "blue" }}>
                  LOGOUT
                </Typography>
            
       
            <TaskIcon />
          </Button>
        </Link>
      </>
    </Box>
  );

  return (
    <Card sx={{}}>
      {/*  <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}> */}
      {DrawerList}
      {/*  </Drawer> */}
    </Card>
  );
}
export default DrawerComp;
