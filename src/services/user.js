import { api } from './config';

export const updateUserRoleId = async (roleId) => {
    try {
     
        const userId = await getUserByEmail();
   console.log(userId)
               
        const response = await api.put(`/user/mod/${userId}`, {roleId}, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserByEmail = async () => {
    try { 
      const response = await api.get('user/getByEmail', { 
        headers: {
            Authorization: localStorage.getItem('Authorization')
        }
       });
       console.log(response.data.id)
      return response.data.id;
    } catch (error) {
      throw error;
    }
  };