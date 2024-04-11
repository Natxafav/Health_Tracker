import { api } from "./config";
/* 
export const  getAllAppointmentsUser = async() =>{

}
export const getAllAppointmentsAdmin = async ()=>{

}
export const getOneAppointmentUser = async ()=>{

}

export const getOneAppointmentAdmin = async ()=>{

}
export const createAppointmentUser = async ()=>{

}
export const createAppointmentAdmin = async ()=>{

}
export const updateAppointment = async ()=>{

}
export const deleteAppointment = async ()=>{

}
export const addUserAppointment = async ()=>{

}

export const removeUserAppointment = async ()=>{

}
 */

export const getMeetToday = async () => {
    try {
        const meet = await api.get(
            "/meet/today",
            {
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                },
            }
        );
        return meet.data;
    } catch (error) {
        console.log(error);
    }
};