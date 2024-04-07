import { api } from "./config";

export const createFamily = async (familyData) => {
    try {
        console.log(familyData)
        const token = localStorage.getItem('Authorization'); 
        const response = await api.post("/family/create", familyData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
};
