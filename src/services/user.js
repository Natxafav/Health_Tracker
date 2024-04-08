import { api } from './config';

export const updateUserRoleId = async (roleId, email) => {
    try {
     
        const userId = await getUserByEmail(email);
      
        const token = localStorage.getItem('Authorization');       
        const response = await api.put(`/user/mod/${userId}`, roleId, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserByEmail = async (email) => {
    try { 
      const response = await api.get('user/getByEmail', { email });
      return response.data.id;
    } catch (error) {
      throw error;
    }
  };