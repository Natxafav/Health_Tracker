import { useEffect, useState } from 'react'
import { getTaskToday } from '../../services/Tasktoday'
import { Card, CardContent, CardHeader } from '@mui/material'
import CardIndv from '../CardIndv/CardIndv'
/* import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid'; */


const Alltask = () => {
    const [user, setUser] = useState([])
    const [reload, setReload] = useState(false)
    const handlerTask = async () => {
        setUser(await getTaskToday())
    }

    useEffect(() => {

    }, [reload])

    const listtask = () => {
        const date = new Date()
        return (user && user.map((task, index) => {
            return (
                <div key={index}>
                        {task.Reminders && task.Reminders.map((reminder, ind) => {
                            return (
                                <CardIndv item={reminder} key={reminder.id}> {/* {date.getDate(reminder.datetime)}/{date.getMonth(reminder.datetime)}/{date.getFullYear(reminder.datetime)} */}</CardIndv>
                            )
                        })}
                        {task.medications && task.medications.map((medication, idx) => {
                            return (
                                
                                   <CardIndv item={medication} key={idx}> {medication.name} {/* {date.getDate(medication.datetime)}/{date.getMonth(medication.datetime)}/{date.getFullYear(medication.datetime)} */}</CardIndv>
                                
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

        )
    }
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