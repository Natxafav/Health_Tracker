import { useEffect, useState } from 'react'
import { getTaskToday } from '../../services/Tasktoday'

const Alltask = () => {
    const [task, setTask] = useState([])

    const handlerTask = async () => {
        setTask(await getTaskToday)
    }

    useEffect(() => {
        handlerTask()
    },)
    return (
        <>
            
            <h1> TEST para la tabla de tareas de hoy</h1>
        </>
    )
}

export default Alltask