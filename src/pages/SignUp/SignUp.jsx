import  { useState } from 'react'
import { signup } from '../../services/auth'
import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@mui/material'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {

  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [nss, setNss] = useState('')
  const [date_birth, setDate_birth] = useState('')
  const [dni, setDni] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [showAddFamily, setShowAddFamily] = useState(false); 
  const navigate = useNavigate()


  const handleSignUp = async () => {
    const res = await signup({
      name, lastname, nss, date_birth, dni, email, password, phone

    })
    console.log(res.data)
    localStorage.setItem('Authorization', res.data.token)
    localStorage.setItem('role', res.data.role)
    localStorage.setItem('email', res.data.email)
    navigate('/home')
  }

  return (
    <div className='signup'>
      <Card className='mainContainer' sx={{ borderRadius: "20px", gap: "15px", }}>
        <CardHeader title="Sign Up" />
        <CardContent className='fields'
          sx={{ display: "flex", flexDirection: "column", gap: '15px', }}
        >
          <TextField className='field'
            sx={{ textAlign: 'center', fontFamily: "poppins", }}

            type="text"www
            variant="outlined"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            inputProps={{ style: { textAlign: 'center' } }}
          ></TextField>
          <TextField className='field'
            sx={{ fontFamily: "poppins" }}
            type="text"
            variant="outlined"
            label="Lastname"
            onChange={(e) => setLastname(e.target.value)}
            inputProps={{ style: { textAlign: 'center' } }}
          ></TextField>
          <TextField className='field'
            sx={{ fontFamily: "poppins" }}
            type="text"
            variant="outlined"
            label="NSS"
            onChange={(e) => setNss(e.target.value)}
            inputProps={{ style: { textAlign: 'center' } }}
          ></TextField>
          <TextField className='field'
            sx={{ fontFamily: "poppins", align: 'center' }}
            type="date"
            variant="outlined"
            label="Birthday"
            onChange={(e) => setDate_birth(e.target.value)}
            inputProps={{ style: { textAlign: 'center' } }}
          ></TextField>
          <TextField className='field'
            sx={{ fontFamily: "poppins" }}
            type="text"
            variant="outlined"
            label="DNI"
            onChange={(e) => setDni(e.target.value)}
            inputProps={{ style: { textAlign: 'center' } }}
          ></TextField>
          <TextField className='field'
            sx={{ fontFamily: "poppins" }}
            type="email"
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{ style: { textAlign: 'center' } }}
          ></TextField>

          <TextField className='field'
            sx={{ fontFamily: "poppins" }}
            type="password"
            variant="outlined"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{ style: { textAlign: 'center' } }}
          ></TextField>
          <TextField className='field'
            sx={{ fontFamily: "poppins" }}
            type="text"
            variant="outlined"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
            inputProps={{ style: { textAlign: 'center' } }}
          ></TextField>
        </CardContent>
        <CardActions className='btncontainer' sx={{ display: "flex", justifyContent: "end" }}>
        <FormControlLabel
            control={<Checkbox checked={showAddFamily} onChange={() => setShowAddFamily(!showAddFamily)} />}
            label="Agregar familia"
          />

          <Button variant=" outlined" onClick={() => handleSignUp()} sx={{
            color: "white",
            backgroundColor: "black",
            fontFamily: "poppins",
            ":hover": {
              backgroundColor: "Aqua",
              color: "black",
              boxShadow: "15px -5px 10px",
            },
          }}>
            Sign Up
          </Button>
          <Button onClick={() => navigate('/login')}variant="outlined" sx={{
            color: "white",
            backgroundColor: "black",
            fontFamily: "poppins",
            ":hover": {
              backgroundColor: "Aqua",
              color: "black",
              boxShadow: "15px -5px 10px",
            },
          }}>Cancel</Button>
        </CardActions>
      </Card>
      {showAddFamily && <AddFamilyComponent />}



    </div>
  
  


  )
}

export default SignUp