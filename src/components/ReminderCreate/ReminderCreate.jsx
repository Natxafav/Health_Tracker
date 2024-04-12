import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';

import { useState } from 'react';
import { getUserByEmail } from '../../services/user';
import { createReminderUser } from '../../services/reminder';
import { useNavigate } from 'react-router-dom'

const ReminderCreate = () => {
 
const[name, setName]= useState('')
const [datetime, setDatetime]= useState('')

const [description, setDescription]= useState('')

const navigate = useNavigate();

const creatingReminder=async (req, res)=>{   
    try {
            const userRole = localStorage.getItem('roleId')            
            const getUser = await getUserByEmail()
           if(userRole === "2"||userRole === "3"||userRole === "4"){
                const newReminder= await createReminderUser ({
                name, Date:datetime,  description, userId:getUser.id
              })
            }
              navigate('/reminder')      
    } catch (error) {
        console.log(error)
    }
    }

const handleCancel = ()=>{
    navigate('/reminder')
}


    
  return (
    <div className='reminderContainer'>
        <Card className="medMain" sx={{ borderRadius: "20px" , }}>
        <CardHeader title="Reminder" sx={{color:'white'}}/>
                <CardContent className="fields" sx={{color: 'white'}}>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        type='text'
                        className="field"
                        placeholder="Reminder Name"
                        label='Reminder Name'
                        onChange={(e) => setName(e.target.value)}                        
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Reminder Name</Typography>
                    </TextField>
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
                            creatingReminder();
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

export default ReminderCreate