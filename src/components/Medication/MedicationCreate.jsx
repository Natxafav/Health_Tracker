import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import './medication.css'
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
        <div className='medicationContainer'>
            <Card className="medMain" sx={{ borderRadius: "20px" }}>
                <CardHeader title="Medication" />
                <CardContent className="fields" sx={{ color: 'white' }}>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white" }}
                        type='text'
                        className="field"
                        label='Medication Name'
                        onChange={(e) => setName(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Medication Name</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white" }}
                        type="datetime-local"
                        className="field"
                        label='Date/ Hour'
                        onChange={(e) => setDatetime(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Date/Hour</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white" }}
                        type='time'
                        className="field"
                        label='Posology'
                        onChange={(e) => setPosology(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Posology</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white" }}
                        type='datetime-local'
                        className="field"
                        label='End Date/ Hour / Duration'
                        onChange={(e) => setDuration(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Duration</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white" }}
                        type='text'
                        className="field"
                        label='Description'
                        onChange={(e) => setDescription(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Description</Typography>
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