import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
  CardHeader,
} from "@mui/material";
import { useState } from "react";
import "./login.css";
import { login } from "../../services/auth";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import { LockOutlined, MailOutline } from "@mui/icons-material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userPost = async () => {
    try {
      const res = await login({ email, password });

      if (!res.data.token) {
        alert('User/pass incorrect')
      } else {

        localStorage.setItem("Authorization", res.data.token);
        localStorage.setItem("roleId", res.data.roleId);
        localStorage.setItem("email", res.data.email);
      }
      if (
        localStorage.getItem("roleId") === "null" ||
        localStorage.getItem("roleId") === undefined
      ) {
        navigate("/family-choice");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="main" sx={{margin: "-150px", borderRadius: "20px", padding:'20px', width: "80%", marginLeft:'1.5rem'}}>
      <CardHeader title="Login" />
      <CardContent className="fields">
        <TextField
          sx={{ fontFamily: "poppins" }}
          className="field"
          margin="dense"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutline />
              </InputAdornment>
            ),
          }}
        >
          <Typography sx={{ fontFamily: "poppins" }}>Email</Typography>
        </TextField>
        <TextField
          sx={{ fontFamily: "poppins", color: 'black' }}
          className="field"
          margin="dense"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined />
              </InputAdornment>
            ),
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
          onClick={() => {
            navigate("/signup");
          }}
          className="btn"
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
  );
}

export default Login;
