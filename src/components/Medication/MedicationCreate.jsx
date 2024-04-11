import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import './medication.css'
import { useState } from 'react';
import { getUserByEmail } from '../../services/user';
import { createNewMed } from '../../services/meds';
import { useNavigate } from 'react-router-dom'


const MedicationCreate = () => {
const[name, setName]= useState('')
const [datetime, setDatetime]= useState('')
const [posology, setPosology]=useState('')
const [duration, setDuration]= useState('')
const [description, setDescription]= useState('')

const navigate = useNavigate();
console.log(datetime)
console.log(duration);
const creatingMeds=async (req, res)=>{   
    try {
            const userRole = localStorage.getItem('roleId')            
            const getUser = await getUserByEmail()
           if(userRole === "2"){
                const newMed= await createNewMed ({
                name, posology, datetime, end:duration, description, userId:getUser.id
              })
            }
              navigate('/meds')      
    } catch (error) {
        console.log(error)
    }
    }

const handleCancel = ()=>{
    navigate('/meds')
}


    
  return (
    <div className='medicationContainer'>
        <Card className="medMain" sx={{ borderRadius: "20px" , }}>
        <CardHeader title="Medication" sx={{color:'white'}}/>
                <CardContent className="fields" sx={{color: 'white'}}>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        type='text'
                        className="field"
                        placeholder="Medication Name"
                        label='Medication Name'
                        onChange={(e) => setName(e.target.value)}                        
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Medication Name</Typography>
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
                        type='time'
                        className="field"
                        placeholder="Posology"
                        label='Posology'
                        onChange={(e) => setPosology(e.target.value)}                        
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Posology</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        type='datetime-local'
                        className="field"
                        placeholder="Duration"
                        label='End Date/ Hour'
                        onChange={(e) => setDuration(e.target.value)}                       
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Duration</Typography>
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
                            creatingMeds();
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

export default MedicationCreate