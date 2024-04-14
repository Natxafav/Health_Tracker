import { useEffect, useState } from 'react'
import { getTaskToday } from '../../services/Tasktoday'
import { Box } from '@mui/material'


const Alltask = () => {
    const [user, setUser] = useState([])
    const [reload, setReload] = useState(false)
    const handlerTask = async () => {
        setUser(await getTaskToday())
    }
    
    useEffect(() => {

    },[reload])

    const listtask = () => {
        const date = new Date()
        return (user && user.map((task, index) => {
            return(
            <>
                <Box sx={{fontSize:"13px",height: "700px",width: "1000px", boxSizing:"content-box" ,position:"absolute", display:"flex",flexWrap:"wrap" ,backgroundColor:"green" }}>
                    {task.Reminders && task.Reminders.map((reminder, ind) => {
                        return (
                                <p key={reminder.id}> {reminder.name}  {date.getDate(reminder.datetime)}/{date.getMonth(reminder.datetime)}/{date.getFullYear(reminder.datetime)}</p>
                        )
                    })}         
                    {task.medications && task.medications.map((medication, idx) => {
                        return ( 
                                <p key={medication.id}>
                                    {medication.name} {date.getDate(medication.datetime)}/{date.getMonth(medication.datetime)}/{date.getFullYear(medication.datetime)}
                                -tomar cada: {medication.posology} horas
                                </p>
                        )
                    })}
                    {task.appointments && task.appointments.map((appointment, idex) => {
                        return (
                            <p key={appointment.id}>{appointment.name} {date.getDate(appointment.datetime)}/{date.getMonth(appointment.datetime)}/{date.getFullYear(appointment.datetime)}</p>
                        )
                    })}
                </Box>
            </>    
            )
        })
    
    )}
        useEffect(() => {
            handlerTask()
        }, [])
        return (
            <>
                {listtask()}

            </>
        )
}



export default Alltask