import axios from "axios";

export const api = axios.create({

   baseURL: 'https://healthtracker-wqqr.onrender.com/api/'
});