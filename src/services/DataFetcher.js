 import { api } from "./config";

 export const getAllMedication = async () => {
    const response = await api.post("auth/login", loginData);
    return response;
}