import { useEffect, useState } from 'react'
import { getTaskToday } from '../../services/Tasktoday'
import { Card, CardContent, CardHeader } from '@mui/material'
import CardIndv from '../CardIndv/CardIndv'




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
            return (
                <div key={index}>
                        {task.Reminders && task.Reminders.map((reminder, ind) => {
                            return (
                                <CardIndv item={reminder} key={reminder.id}></CardIndv>
                            )
                        })}
                        {task.medications && task.medications.map((medication, idx) => {
                            return (

                                   <CardIndv item={medication} key={idx}> {medication.name}</CardIndv>

                            )
                        })}
                        {task.appointments && task.appointments.map((appointment, idex) => {
                            return (
                                <CardIndv item={appointment} key={idex}>{appointment.name} {date.getDate(appointment.datetime)}/{date.getMonth(appointment.datetime)}/{date.getFullYear(appointment.datetime)}</CardIndv>
                            )
                        })}

                </div>
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