import { useEffect, useState } from 'react'
import { getMedsToday } from '../../services/meds'
import { getReminderToday } from '../../services/reminder'
import { getMeetToday } from '../../services/meets'

const TodayTask = () => {
    const [medlist, setMedlist] = useState([])
    const [remlist, setRemlist] = useState([])
    const [meetlist, setMeetlist] = useState([])

    const handlerAllList = async () => {
        setMedlist(await getMedsToday())
        setRemlist(await getReminderToday())
        setMeetlist(await getMeetToday())
    }
    const getAllList = () => {
        const date = new Date();
        const mlist = () => {
            return (
                
                medlist.sort((a,b) => (a.datetime - b.datetime)).map((med, index) => {
                        return (
                            <div key={index}>
                                <div className="card">{med.name}</div>
                                <div className="card">{date.getDay(med.datetime)} / {date.getMonth(med.datetime)} / {date.getFullYear(med.datetime)}</div>
                            </div>
                        )
                    })   
                )
            }
        const rlist = () => {
            return (
                remlist.map((rem, index) => {
                        return (
                            <div key={index}>
                                <div className="card">{rem.name}</div>
                                <div className="card">{date.getDay(rem.date)} / {date.getMonth(rem.date)} / {date.getFullYear(rem.date)}</div>
                            </div>
                        )
                    })   
                )
            }
        const alist = () => {
            return (

                    meetlist.map((meet, index) => {
                        return (
                            <div key={index}>
                                <div className="card">{meet.name}</div>
                                <div className="card">{date.getDay(meet.datetime)} / {date.getMonth(meet.datetime)} / {date.getFullYear(meet.datetime)}</div>
                            </div>
                        )
                    })   
                )
            }
        return (
            <><div className="Medicationlist">
                {mlist()}
            </div>
            <div className="MeetList">
                {alist()}
            </div>
            <div className="Reminderlist">
                {rlist()}
            </div>
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
