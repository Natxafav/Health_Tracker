import { useEffect, useState } from 'react'
import { getAllMeds } from '../../services/meds'
import { getAllAppointments } from '../../services/appointments'
import { getAllReminders } from '../../services/reminder'

const Urgency = () => {
    const [medlist, setMedlist] = useState([])
    const [reminderlist, setReminderlist] = useState([])
    const [appointmentlist, setAppointmentlist] = useState([])

    const handlerAllList = async () => {
        setMedlist(await getAllMeds())
        setReminderlist(await getAllReminders())
        setAppointmentlist(await getAllAppointments())
    }
    const getAllList = () => {

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