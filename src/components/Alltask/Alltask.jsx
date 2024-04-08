import { useEffect } from "react"


const Alltask = () => {
    
    const [medlist, setMedlist] = useState([])
    const [reminderlist, setReminderlist] = useState([])
    const [appointmentlist, setAppointmentlist] = useState([])

    const getAllList = async () => {
        setMedlist(await getAllMeds())
        setReminderlist(await getAllReminders())
        setAppointmentlist(await getAllAppointments())
    }

    useEffect(() => {
        getAllList()
    }, [])

    return (
        <>
            <div>Alltask</div>
        </>
    )
}

export default Alltask