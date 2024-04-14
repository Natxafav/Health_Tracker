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
import LoginIcon from "@mui/icons-material/Login";

function DrawerComp() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handlelogout = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("roleId");
    localStorage.removeItem("email");
    navigate("/");
    location.reload();
  };

  const DrawerList = (
    <>
      {" "}
      <div className="home">
        <Link to="/home">
          <Button
            sx={{
              color: "rgb(7, 150, 151)",
              paddingRight: "110px",
              ":hover": {
                backgroundColor: "rgb(7, 150, 151)",
                color: "yellow",
              },
              display: "flex",
              alignContent: "baseline",
              gap: 1,
            }}
          >
            <AddHomeTwoToneIcon />
            <Typography variant="h6" component="h6" >
              HOME
            </Typography>
          </Button>
        </Link>
      </div>
      <div className="components">
        <Link to="/family">
          <Button
            sx={{
              color: "rgb(7, 150, 151)",
              paddingRight: "100px",
              ":hover": { background: "rgb(7, 150, 151)", color: "yellow" },
              display: "flex",
              alignContent: "baseline",
              gap: 1,
            }}
          >
            <FamilyRestroomIcon />
            <Typography variant="h6" component="h6">
              FAMILY
            </Typography>
          </Button>
        </Link>
        <Link to="/meet">
          <Button
            sx={{
              color: "rgb(7, 150, 151)",
              paddingRight: "10px",
              ":hover": { background: "rgb(7, 150, 151)", color: "yellow" },
              display: "flex",
              alignContent: "baseline",
              gap: 1,
            }}
          >
            <EventAvailableIcon />
            <Typography variant="h6" component="h6">
              APPOINTMENTS
            </Typography>
          </Button>
        </Link>
        <Link to="/meds">
          <Button
            sx={{
              color: "rgb(7, 150, 151)",
              paddingRight: "55px",
              ":hover": { background: "rgb(7, 150, 151)", color: "yellow" },
              display: "flex",
              alignContent: "baseline",
              gap: 1,
            }}
          >
            <MedicationIcon />
            <Typography variant="h6" component="h6">
              MEDICINES
            </Typography>
          </Button>
        </Link>
        <Link to="/reminder">
          <Button
            sx={{
              color: "rgb(7, 150, 151)",
              paddingRight: "50px",
              ":hover": { background: "rgb(7, 150, 151)", color: "yellow" },
              display: "flex",
              alignContent: "baseline",
              gap: 1,
            }}
          >
            <TaskIcon />
            <Typography variant="h6" component="h6">
              REMINDERS
            </Typography>
          </Button>
        </Link>
      </div>
      <div className="logout">
        {localStorage.getItem("Authorization") ? (
          <Link to="/">
            <Button
              sx={{
                color: "Red",
                paddingRight: "80px",
                ":hover": { background: "red", color: "white" },
                display: "flex",
                alignContent: "baseline",
                gap: 1,
              }}
              onClick={() => {
                handlelogout();
              }}
            >
              <LogoutIcon />

              <Typography variant="h6" component="h6">
                LOGOUT
              </Typography>
            </Button>
          </Link>
        ) : (
          <Link to="/signup">
            <Button>
              <LoginIcon />

              <Typography variant="h6" component="h6">
                LOGIN
              </Typography>
            </Button>
          </Link>
        )}
      </div>
    </>
  );

  React.useEffect(() => {}, [localStorage["Authorization"]]);

  return (
    <Card
      className="CardDrawerComp"
      sx={{
        width: "300px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-evenly",
        marginRight: "20px",
        padding: "0 0 50px 20px",
        backgroundColor: "black",
      }}
    >
      {DrawerList}
    </Card>
  );
}
export default DrawerComp;
