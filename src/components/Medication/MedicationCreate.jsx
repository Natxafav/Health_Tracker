import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';

import { useState } from 'react';
import { getUserByEmail } from '../../services/user';
import { createNewMed } from '../../services/meds';
import { useNavigate } from 'react-router-dom'


const MedicationCreate = () => {

    const [name, setName] = useState('')
    const [datetime, setDatetime] = useState('')
    const [posology, setPosology] = useState('')
    const [duration, setDuration] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate();

    const creatingMeds = async (req, res) => {
        try {
            const userRole = localStorage.getItem('roleId')
            const getUser = await getUserByEmail()
            if (userRole === "2") {
                const newMed = await createNewMed({
                    name, posology, datetime, end: duration, description, userId: getUser.id
                })
            }
            navigate('/meds')
        } catch (error) {
            console.log(error)
        }
    }

    const handleCancel = () => {
        navigate('/meds')
    }



    return (
        <div className='medicationContainer' style={{display:"flex", alignItems:"center", margin:"0 auto", padding:"10px"}}>
            <Card className="medMain" sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
           borderRadius: "20px" }}>
                <CardHeader title="Medication" />
                <CardContent className="fields" sx={{ color: 'white',backgroundColor: "rgb(7, 150, 151)", textAlign:"center" }}>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width:"300px" }}
                        type='text'
                        className="field"
                         inputProps={{ style: { textAlign: "end" } }}
                        label='Medication Name'
                        onChange={(e) => setName(e.target.value)}
                    >
                       
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width:"300px" }}
                        type="datetime-local"
                        className="field"
                         inputProps={{ style: { textAlign: "end" } }}
                        label='Date/ Hour'
                        onChange={(e) => setDatetime(e.target.value)}
                    >
                      
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width:"300px" }}
                        type='time'
                         inputProps={{ style: { textAlign: "end" } }}
                        className="field"
                        label='Posology'
                        onChange={(e) => setPosology(e.target.value)}
                    >
                       
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width:"300px" }}
                        type='datetime-local'
                         inputProps={{ style: { textAlign: "end" } }}
                        className="field"
                        label='End Date'
                        onChange={(e) => setDuration(e.target.value)}
                    >
                       
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width:"300px" }}
                        type='text'
                         inputProps={{ style: { textAlign: "end" } }}
                        className="field"
                        label='Description'
                        onChange={(e) => setDescription(e.target.value)}
                    >
                       
                    </TextField>
                </CardContent>
                <div className="btncontainer" style={{ height: "100px", width: "100%", display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        className="btn"
                        onClick={() => {
                            creatingMeds();
                        }}
                        sx={{
                            color: "white",
                            background: "green",
                            fontFamily: "poppins",
                            ":hover": {
                                backgroundColor: "black",
                                color: "white",
                                boxShadow: "15px -5px 10px",
                            },
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={() => { handleCancel() }}
                        className="btn"
                        sx={{
                            color: "white",
                            background: "red",
                            fontFamily: "poppins",
                            ":hover": {
                                backgroundColor: "black",
                                color: "white",
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