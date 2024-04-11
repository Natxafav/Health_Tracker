import { useEffect, useState } from 'react'
import { getMedsToday } from '../../services/meds'

const TodayTask = () => {
    const [medlist, setMedlist] = useState([])
    const [remlist, setRemlist] = useState([])
    const [meetlist, setMeetlist] = useState([])

    const handlerAllList = async () => {
        setMedlist(await getMedsToday())
        setRemlist(await getRemToday())
        setMeetlist(await getMeetToday())
    }
    const getAllList = () => {
        const date = new Date();
        const list = () => {
            return (
                medlist.map((med, index) => {
                        return (
                            <div key={index}>
                                <div className="card">{med.name}</div>
                                <div className="card">{date.getDay(med.datetime)} / {date.getMonth(med.datetime)} / {date.getFullYear(med.datetime)}</div>
                            </div>
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

    useEffect(() => {
        handlerAllList()
    }, [])

    return (
        <>
            {getAllList()}
        </>
    )
}

export default TodayTask
