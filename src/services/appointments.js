import { api } from "./config";

export const createAppointmnet = async (data) => {
    try {
        const appointment = await api.post(
            "/meets/create",
            data,
            {
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                },
            }
        );

        return appointment.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllAppointments = async () => {
    try {
        const appointments = await api.get(
            "/meets/getAll",
            {
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                },
            }
        );

        return appointments.data;
    } catch (error) {
        console.log(error);
    }
};