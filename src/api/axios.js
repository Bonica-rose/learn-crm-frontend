import axios from "axios";
import { store } from "../app/store";
import { onLogout } from "../features/auth/authSlice";

// console.log(import.meta.env.VITE_API_URL);

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {"Content-Type":"application/json"}   
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // dispatch logout or redirect to login
            store.dispatch(onLogout());
        }

        return Promise.reject(error);
    }
);

export default api;