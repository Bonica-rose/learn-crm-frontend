import api from "../../api/axios";

export const registerAPI = async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
};

export const loginAPI = async (userData) => {
    const response = await api.post("/auth/login", userData);
    return response.data;
};

export const getLoggedInUser = async () => {
    const response = await api.get("/auth/me");
    return response.data;
};