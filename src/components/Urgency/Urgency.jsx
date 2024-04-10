import { useEffect, useState } from 'react'
import { getAllMedicationsUser } from '../../services/meds'
import { getAllAppointments } from '../../services/appointments'
import { getAllReminders } from '../../services/reminder'

const Urgency = () => {
    const [medlist, setMedlist] = useState([])
    const [reminderlist, setReminderlist] = useState([])
    const [appointmentlist, setAppointmentlist] = useState([])

    const handlerAllList = async () => {
        setMedlist(await getAllMedicationsUser())
    /*  setReminderlist(await getAllReminders())
        setAppointmentlist(await getAllAppointments()) */
    }
    const getAllList = () => {
        const date = new Date();
        const list = () => {
            return (
                medlist.map((med, index) => {
                    return med.medications.map((medication, idx) => {
                        return (
                            <div key={idx}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{medication.name}</h5>
                                        <p className="card-text">{medication.description}</p>
                                        <p> {date.getDay(medication.datetime)}/{date.getMonth(medication.datetime)}/{date.getFullYear(medication.datetime)} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                })
            )
        }

        return (
            <>
                {list()}
            </>
        )
    }

    useEffect(() => {
        handlerAllList()
    }, [])

    return (
        <>
            {getAllList()}
        </>
    )
}

export default Urgency