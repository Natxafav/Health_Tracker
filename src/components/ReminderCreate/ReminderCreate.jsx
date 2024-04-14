import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';

import { useState } from 'react';
import { getUserByEmail } from '../../services/user';
import { createReminderUser } from '../../services/reminder';
import { useNavigate } from 'react-router-dom'

const ReminderCreate = () => {

    const [name, setName] = useState('')
    const [datetime, setDatetime] = useState('')

    const [description, setDescription] = useState('')

    const navigate = useNavigate();

    const creatingReminder = async (req, res) => {
        try {
            const userRole = localStorage.getItem('roleId')
            const getUser = await getUserByEmail()
            if (userRole === "2" || userRole === "3" || userRole === "4") {
                const newReminder = await createReminderUser({
                    name, datetime, description, userId: getUser.id
                })
            }
            navigate('/reminder')
        } catch (error) {
            console.log(error)
        }
    }

    const handleCancel = () => {
        navigate('/reminder')
    }



    return (
        <div className='reminderContainer' style={{ display: "flex", alignItems: "center", margin: "0 auto", padding: "10px" }}>
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
                <CardHeader title="Reminder" />
                <CardContent className="fields" sx={{ color: 'white', backgroundColor: "rgb(7, 150, 151)", textAlign: "center", borderRadius: "20px" }}>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white", width: "300px" }}
                        inputProps={{ style: { textAlign: "end" } }}
                        type='text'
                        className="field"
                        placeholder="Reminder Name"
                        label='Reminder Name'
                        onChange={(e) => setName(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Reminder Name</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white", width: "300px" }}
                        inputProps={{ style: { textAlign: "end" } }}
                        type='datetime-local'
                        className="field"
                        placeholder="Date"
                        label='Date/ Hour'
                        onChange={(e) => setDatetime(e.target.value)}
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Date/Hour</Typography>
                    </TextField>
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white", width: "300px" }}
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
                            creatingReminder();
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

export default ReminderCreate