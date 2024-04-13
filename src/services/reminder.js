import { api } from "./config";

export const createReminderUser = async (data) => {
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

export const getAllReminderUser = async () => {
    try {
        const reminders = await api.get(
            "/reminder/get",
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

export const getOneReminders = async () => {
    try {
        const reminders = await api.get(
            "/reminder/getone",
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

export const updateReminder = async () => {
    try {
        const reminders = await api.get(
            "/reminder/get",
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

export const deleteReminder = async () => {
    try {
        const response = await api.get('/reminder/admin', {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching families:', error);
    }
};

export const getReminderToday = async () => {
    try {
        const response = await api.get('/reminder/today', {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching families:', error);
    }
}


