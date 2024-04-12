import { useEffect, useState } from 'react'
import { getReminderToday } from '../../services/reminder'

const GetReminder = () => {
    const [remList, setRemlist] = useState([])

    const handlerAllList = async () => {
        setRemlist(await getReminderToday())
    }

    useEffect(() => {
        handlerAllList()
    }, [])

    // TODO : traer lista de Recordatorios
    const getReminder = () => {
        
        const date = new Date();
        const list = () => {
            return (remList.map((rem, idx) => {
                return (
                    <>
                        <div key={idx}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{rem.name}</h5>
                                    <p> {date.getDay(rem.datetime)}/{date.getMonth(rem.datetime)}/{date.getFullYear(rem.datetime)} </p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
            )
        }
        return (
            <>
                {list()}
            </>
        )
    }

    return (
        <>
            {getReminder()}
        </>
    )
}

export default GetReminder