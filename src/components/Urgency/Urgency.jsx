import GetMeds from '../GetMeds/GetMeds'
import GetMeet from '../GetMeet/GetMeet'
import GetReminder from '../GetReminder/GetReminder'

const Urgency = () => {
    
    return (
        <>
            <GetMeds />
            <GetReminder/>
            <GetMeet/>
        </>
    )
}

export default Urgency