import { api } from "./config";

export const createFamily = async (familyData) => {
    try {
     
        const token = localStorage.getItem('Authorization'); 
        const response = await api.post("/family/create", {name:familyData}, {
            headers: {
                'Authorization': token
            }
        });
        console.log(response)
        return response;
    } catch (error) {
        throw error;
    }
};


