import { api } from "./config";

export const login = async (loginData) => {

    try {
        const response = await api.post("auth/login", loginData);
        return response;
        
    } catch (error) {
        return alert('Email/password incorrect')
    }
}
export const signup = async (signUpData) =>{
    const response = await api.post ('auth/signup', signUpData)
    return response
}