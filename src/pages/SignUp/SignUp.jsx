import { useState } from "react";
import { signup } from "../../services/auth";
import "./signUp.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nss, setNss] = useState("");
  const [date_birth, setDate_birth] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showAddFamily, setShowAddFamily] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await signup({
        name,
        lastname,
        nss,
        date_birth,
        dni,
        email,
        password,
        phone,
      });
      const token = res.data.token;
      localStorage.setItem("Authorization", token);
      localStorage.setItem("email", email);
location.reload()
      if (showAddFamily) {
        navigate("/family-choice");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <Card
        className="mainContainerSignUp"
        sx={{background: "rgb(7 ,150, 151)"}}
      >
        <CardHeader title="Sign Up" sx={{ color: "white" }} />
        <CardContent
          className="fields"
          sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <TextField
            className="field"
            sx={{ textAlign: "center", fontFamily: "poppins", backgroundColor: "white" , borderRadius: "20px" }}
            type="text"
            variant="outlined"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          ></TextField>
          <TextField
            className="field"
            sx={{ fontFamily: "poppins", backgroundColor: "white" , borderRadius: "20px"}}
            type="text"
            variant="outlined"
            label="Lastname"
            onChange={(e) => setLastname(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          ></TextField>
          <TextField
            className="field"
            sx={{ fontFamily: "poppins" , backgroundColor: "white" , borderRadius: "20px"}}
            type="text"
            variant="outlined"
            label="NSS"
            onChange={(e) => setNss(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          ></TextField>
          <TextField
            className="field"
            sx={{ fontFamily: "poppins", align: "center", backgroundColor: "white" , borderRadius: "20px" }}
            type="date"
            variant="outlined"
            label="Birthday"
            onChange={(e) => setDate_birth(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          ></TextField>
          <TextField
            className="field"
            sx={{ fontFamily: "poppins" , backgroundColor: "white", borderRadius: "20px"}}
            type="text"
            variant="outlined"
            label="DNI"
            onChange={(e) => setDni(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          ></TextField>
          <TextField
            className="field"
            sx={{ fontFamily: "poppins", backgroundColor: "white" , borderRadius: "20px" }}
            type="email"
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          ></TextField>

          <TextField
            className="field"
            sx={{ fontFamily: "poppins", backgroundColor: "white" , borderRadius: "20px" }}
            type="password"
            variant="outlined"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          ></TextField>
          <TextField
            className="field"
            sx={{ fontFamily: "poppins", backgroundColor: "white" , borderRadius: "20px" }}
            type="text"
            variant="outlined"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          ></TextField>


        </CardContent>
        <CardActions
          className="btncontainer"
          sx={{ display: "flex", alignItems:"center" ,justifyContent: "start" }}
        >
          <FormControlLabel
          sx={{ color:"white"}}
            control={
              <Checkbox sx={{color: "white"}}
                checked={showAddFamily}
                onChange={() => setShowAddFamily(!showAddFamily)}
              />
            }
            label="Agregar familia" 
          />

          <Button
            variant="outlined"
            onClick={() => handleSignUp()}
            sx={{
              color: "white",
              backgroundColor: "green",
              fontFamily: "poppins",
              ":hover": {
                backgroundColor: "green",
                color: "yellow",
                transition: "0.3s",
                fontWeight: "bold",
              },
            }}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outlined"
            sx={{
              color: "white",
              backgroundColor: "green",
              fontFamily: "poppins",
              ":hover": {
                backgroundColor: "green",
                color: "yellow",
                transition: "0.3s",
                fontWeight: "bold",
              },
            }}
          >
            Login
          </Button>
        </CardActions>
        
      </Card>
    </div>
  );
};

export default SignUp;
