import { api } from "./config";

export const login = async (loginData) => {
    const response = await api.post("auth/login", loginData);
    return response;
}