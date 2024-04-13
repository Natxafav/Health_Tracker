import * as React from "react";
import "./drawerComp.css";
import Box from "@mui/material/Box";
import { Button, Typography, Card, Icon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AddHomeTwoToneIcon from "@mui/icons-material/AddHomeTwoTone";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MedicationIcon from "@mui/icons-material/Medication";
import TaskIcon from "@mui/icons-material/Task";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from '@mui/icons-material/Login';

function DrawerComp() {
  const navigate= useNavigate()
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handlelogout = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("roleId");
    localStorage.removeItem("email");
    navigate("/");
    location.reload()
  };

  const DrawerList = (
    <Box
      className="boxDrawerList"
      sx={{
        paddingBottom: "100px",
        height:"50%"
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {" "}
      <div className="home">
        <Link to="/home">
          <Button>
            <AddHomeTwoToneIcon />
            <Typography variant="h6" component="h6" sx={{ color: "black" }}>
              HOME
            </Typography>
          </Button>
        </Link>
      </div>
      <div className="components">
        <Link to="/family">
          <Button>
            <FamilyRestroomIcon />
            <Typography variant="h6" component="h6" sx={{ color: "black" }}>
              FAMILY
            </Typography>
          </Button>
        </Link>
        <Link to="/meet">
          <Button>
            <EventAvailableIcon />
            <Typography variant="h6" component="h6" sx={{ color: "black" }}>
              APPOINTMENTS
            </Typography>
          </Button>
        </Link>
        <Link to="/meds">
          <Button>
            <MedicationIcon />
            <Typography variant="h6" component="h6" sx={{ color: "black" }}>
              MEDICINES
            </Typography>
          </Button>
        </Link>
        <Link to="/reminder">
          <Button>
            <TaskIcon />
            <Typography variant="h6" component="h6" sx={{ color: "black" }}>
              REMINDERS
            </Typography>
          </Button>
        </Link>
      </div>
      <div className="logout">
        {localStorage.getItem('Authorization')?(

<Link to="/">
          <Button
            onClick={() => {
              handlelogout();
            }}
          >
            <LogoutIcon />

            <Typography variant="h6" component="h6" sx={{ color: "black" }}>
              LOGOUT
            </Typography>

           
          </Button>
        </Link>

        ):(

          <Link to="/signup">
          <Button           
          >
            <LoginIcon />

            <Typography variant="h6" component="h6" sx={{ color: "black" }}>
              LOGIN
            </Typography>

           
          </Button>
        </Link>
        )


        }
        
      </div>
    </Box>
  );

  React.useEffect(()=>{

  },[localStorage["Authorization"]])

  return (
    <Card
      className="CardDrawerComp"
      sx={{
        width: "250px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-evenly",
        marginRight: "20px",
        paddingBottom: "50px",
      }}
    >
     
      {DrawerList}
    </Card>
  );
}
export default DrawerComp;
