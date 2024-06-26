import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { getUserByEmail } from '../../services/user';
import { createAppointmentUser } from '../../services/meets';
import { useNavigate } from 'react-router-dom'

const MeetCreate = () => {

    const [name, setName] = useState('')
    const [datetime, setDatetime] = useState('')
    const [locate, setLocate] = useState('')
    const [specialist, setSpecialist] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate();


    const creatingMeets = async (req, res) => {
        try {
            const userRole = localStorage.getItem('roleId')
            const getUser = await getUserByEmail()
            if (userRole === "2" || userRole === "3") {
                const newMeet = await createAppointmentUser({
                    locate, datetime, specialist, description, userId: getUser
                })

            }
            navigate('/meet')
        } catch (error) {
            console.log(error)
        }
    }

    const handleCancel = () => {
        navigate('/meet')
    }



    return (
        <div className='medicationContainer' style={{ display: "flex", alignItems: "center", margin: "0 auto", padding: "10px" }}>
            <Card className="medMain" sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                borderRadius: "20px"
            }}>
                <CardHeader title="Appointment" />
                <CardContent className="fields" sx={{ color: 'white', backgroundColor: "rgb(7, 150, 151)", textAlign: "center", borderRadius: "20px" }}>

                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width: "300px", backgroundColor: "white"}}
                        inputProps={{ style: { textAlign: "end" } }}
                        type='datetime-local'
                        className="field"
                        onChange={(e) => setDatetime(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Date/Hour</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width: "300px",backgroundColor: "white"}}
                        type='text'
                        className="field"
                        placeholder="locate"
                        label='locate'
                        onChange={(e) => setLocate(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>locate</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width: "300px" ,backgroundColor: "white"}}
                        inputProps={{ style: { textAlign: "end" } }}
                        type='datetime'
                        className="field"
                        placeholder="specialist"
                        label='Specialist'
                        onChange={(e) => setSpecialist(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>specialist</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", color: "white", width: "300px" ,backgroundColor: "white"}}
                        inputProps={{ style: { textAlign: "end" } }}
                        type='text'
                        className="field"
                        placeholder="Description"
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
                            creatingMeets();
                        }}
                        sx={{
                            color: "white",
                            background: "green",
                            fontFamily: "poppins",
                            ":hover": {
                                backgroundColor: "green",
                                color: "yellow",
                                transition: "0.5s",
                                fontSize: "18px",
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
                                backgroundColor: "red",
                                color: "yellow",
                                transition: "0.5s",
                                fontSize: "18px",
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