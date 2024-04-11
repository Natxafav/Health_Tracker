import { useEffect, useState } from 'react'
import { getAllReminders } from '../../services/reminder'

const GetReminder = () => {
    const [remList, setRemlist] = useState([])

    const handlerAllList = async () => {
        setRemlist(await getAllReminders())
    /*  setReminderlist(await getAllReminders())
        setAppointmentlist(await getAllAppointments()) */
    }

    // TODO : traer lista de Recordatorios
    const getAllList = () => {
        const date = new Date();
        const list = () => {
            return (
                medlist.map((rem, index) => {
                    return med.medications.map((, idx) => {
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

export default GetReminder