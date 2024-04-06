
import { Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './login.css'

import "@fontsource/poppins"
import { Link, useNavigate } from 'react-router-dom'


const FamilyData = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    return (
        <div className="family">
            <Card className="main" sx={{ borderRadius: "20px" }}>
                <CardContent className="fields">
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        className="field"
                        placeholder="Family Name"                        
                        onChange={(e) => setEmail(e.target.value)}                    
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Family name</Typography>
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
                            onClick={() => {navigate('/signup')}}
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
        </div>
    );
}




export default FamilyData