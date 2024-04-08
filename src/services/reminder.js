import { api } from "./config";

export const createReminder = async (data) => {
    try {
        const reminder = await api.post(
            "/reminder/create",
            data,
            {
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                },
            }
        );

        return reminder.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllReminders = async () => {
    try {
        const reminders = await api.get(
            "/reminder/getAll",
            {
                headers: {
                    Authorization: localStorage.getItem("Authorization"),
                },
            }
        );

        return reminders.data;
    } catch (error) {
        console.log(error);
    }
};
