import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import "./Login.css";
import { login } from "../../services/auth";
import "@fontsource/poppins";
import { LockOutlined, MailOutline } from "@mui/icons-material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userPost = async () => {
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      console.log("TODO BIEN");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <Card className="main" sx={{ borderRadius: "20px" }}>
        <CardContent className="fields">
          <TextField
            sx={{ margin: "10px", fontFamily: "poppins" }}
            className="field"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <MailOutline />
                    </InputAdornment>
                )
            }}
          >
            <Typography sx={{ fontFamily: "poppins" }}>Email</Typography>
          </TextField>
          <TextField
            sx={{ margin: "10px", fontFamily: "poppins" }}
            className="field"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <LockOutlined />
                    </InputAdornment>
                )
            }}
          >
            <Typography sx={{ fontFamily: "poppins" }}>Password</Typography>
          </TextField>
        </CardContent>
        <div className="btncontainer">
          <Button
            className="btn"
            onClick={() => {
              userPost();
            }}
            sx={{
              color: "white",
              backgroundColor: "black",
              fontFamily: "poppins",
              ":hover": {
                backgroundColor: "Aqua",
                color: "black",
                boxShadow: "15px -5px 10px",
              },
            }}
          >
            Login
          </Button>
          <Button
            className="btn"
            onClick={() => {}}
            sx={{
              color: "white",
              backgroundColor: "black",
              fontFamily: "poppins",
              ":hover": {
                backgroundColor: "Aqua",
                color: "black",
                boxShadow: "15px -5px 10px",
              },
            }}
          >
            Register
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Login;
