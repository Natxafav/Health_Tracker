import { api } from './config';

export const updateUserRoleId = async (roleId) => {
    console.log(roleId)
    try {
        const userId = await getUserByEmail();
        const response = await api.put(`/user/mod/${userId}`, { roleId: roleId }, {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            }
        })
    return response.data;
    } catch (error) {
        console.log(error)
    };
};

export const getUserByEmail = async () => {
    try {
        const response = await api.get('user/getByEmail', {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            }
        });
        return response.data.id;
    } catch (error) {
        console.log(error)
    }
};