import { api } from './config';

export const getTaskToday = async () => {
 
    const response = await api.get('/todaytask',{
      headers: {
        'Authorization': localStorage.getItem("Authorization"),
      },
    });
    return response.data;

};