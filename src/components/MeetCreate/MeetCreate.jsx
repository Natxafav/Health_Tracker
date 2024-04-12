import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { getUserByEmail } from '../../services/user';
import { createAppointmentUser } from '../../services/meets';
import { useNavigate } from 'react-router-dom'

const MeetCreate = () => {
  
const[name, setName]= useState('')
const [datetime, setDatetime]= useState('')
const [locate, setLocate]=useState('')
const [specialist, setSpecialist]= useState('')
const [description, setDescription]= useState('')

const navigate = useNavigate();


const creatingMeets=async (req, res)=>{   
    try {
            const userRole = localStorage.getItem('roleId')            
            const getUser = await getUserByEmail()
           if(userRole === "2"|| userRole === "3"){
                const newMeet= await createAppointmentUser ({
               locate, datetime, specialist, description, userId:getUser
              })
              console.log(newMeet)
            }
              navigate('/meet')      
    } catch (error) {
        console.log(error)
    }
    }

const handleCancel = ()=>{
    navigate('/meet')
}


    
  return (
    <div className='medicationContainer'>
        <Card className="medMain" sx={{ borderRadius: "20px" , }}>
        <CardHeader title="Appointment" sx={{color:'white'}}/>
                <CardContent className="fields" sx={{color: 'white'}}>
                    
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        type='datetime-local'
                        className="field"
                        placeholder="Date"
                        label='Date/ Hour'
                        onChange={(e) => setDatetime(e.target.value)}                       
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Date/Hour</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        type='text'
                        className="field"
                        placeholder="locate"
                        label='locate'
                        onChange={(e) => setLocate(e.target.value)}                        
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>locate</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        type='datetime'
                        className="field"
                        placeholder="specialist"
                        label='Specialist'
                        onChange={(e) => setSpecialist(e.target.value)}                       
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>specialist</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        type='text'
                        className="field"
                        placeholder="Description"
                        label='Description'
                        onChange={(e) => setDescription(e.target.value)}                       
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Description</Typography>
                    </TextField>
                </CardContent>
                <div className="btncontainer">
                    <Button
                        className="btn"
                        onClick={() => {
                            creatingMeets();
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
                        Save
                    </Button>
                        <Button
                            onClick={() => {handleCancel()}}
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
                            Cancel
                        </Button>
                </div>
            </Card>
    </div>
  )
}

export default MeetCreate