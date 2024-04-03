import React, { useState } from 'react'
import { signup } from '../../services/auth'
import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@mui/material'

const SignUp = () => {

    const [name, setName] = useState('')
    const [lastname, setLastname]= useState('')
    const [nss, setNss]= useState('')
    const [date_birth, setDate_birth]= useState('')
    const [dni, setDni]= useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [phone, setPhone]= useState('')
    

    const handleSignUp = async () => {
        const res= await signup({
            name, lastname, nss, date_birth, dni, email, password, phone 

        })
    }

  return (
    <>
    <Card sx={{ width: "40%" }}>
        <CardHeader title="Sign Up" />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", garp: "10px" }}
        >
          <TextField
            type="text"
            variant="outlined"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            type="text"
            variant="outlined"
            label="Lastname"
            onChange={(e) => setLastname(e.target.value)}
          ></TextField>
            <TextField
            type="text"
            variant="outlined"
            label="NSS"
            onChange={(e) => setNss(e.target.value)}
          ></TextField>
            <TextField
            type="date"
            variant="outlined"
            label="Birthday"
            onChange={(e) => setDate_birth(e.target.value)}
          ></TextField>
           <TextField
            type="text"
            variant="outlined"
            label="DNI"
            onChange={(e) => setDni(e.target.value)}
          ></TextField>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <TextField
            type="text"
            variant="outlined"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
          ></TextField>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant=" outlined" onClick={()=>handleSignUp()}>
            Sign Up
          </Button>
          <Button variant="outlined">Cancel</Button>
        </CardActions>
      </Card>
    
    
    
    
    </>  )
}

export default SignUp