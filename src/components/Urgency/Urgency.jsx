import { useEffect, useState } from 'react'
import { getAllMeds } from '../../services/meds'
import { getAllAppointments } from '../../services/appointments'
import { getAllReminders } from '../../services/reminder'

const Urgency = () => {
    const [medlist, setMedlist] = useState([])
    const [reminderlist, setReminderlist] = useState([])
    const [appointmentlist, setAppointmentlist] = useState([])

    const getAllList = async () => {
        setMedlist(await getAllMeds())
      /*   setReminderlist(await getAllReminders())
        setAppointmentlist(await getAllAppointments()) */
    }

    const handlerMedList = () => {
        console.log(medlist)
    }

    useEffect(() => {
        getAllList()
    }, [])


    return (
        <>
            <div className='Cuadrante'>
                <ul>
                    {handlerMedList()}
                </ul>
            </div>
        </>
    )
}

export default Urgency