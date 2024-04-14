import { api } from './config';

export const getTaskToday = async () => {
    const response = await api.get('/task/today',{
      headers: {
        'Authorization': localStorage.getItem("Authorization"),
      },
    });
    return response.data;

};