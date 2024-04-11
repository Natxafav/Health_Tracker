import { useEffect, useState } from 'react'
import { getMeetToday } from '../../services/meets'

const GetMeet = () => {
    const [meetList, setMeetlist] = useState([])
    
    const handlerAllList = async () => {
        setMeetlist(await getMeetToday())
    }

    useEffect(() => {
        handlerAllList()
    }, [])
    
    // TODO : traer lista de Recordatorios
    const getReminder = () => {
        const date = new Date();
        const list = () => {
            return(MediaList.map((rem, ix) => {
                return (
                    <>
                        <div key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{rem.title}</h5>
                                    <p className="card-text">{rem.description}</p>
                                    <p> {date.getDay(rem.datetime)}/{date.getMonth(rem.datetime)}/{date.getFullYear(rem.datetime)} </p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        )}
        return(
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