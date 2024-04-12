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
    const getMeet = () => {
        const date = new Date();
        const list = () => {
            return (meetList && meetList.map((meet, idxn) => {
                return (
                    <>
                        <div key={idxn}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{meet.name}</h5>
                                    <p> {date.getDay(meet.datetime)}/{date.getMonth(meet.datetime)}/{date.getFullYear(meet.datetime)} </p>
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
                {getMeet()}
            </>
        )
    }

export default GetMeet