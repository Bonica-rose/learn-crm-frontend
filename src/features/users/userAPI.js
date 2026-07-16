import api from "../../api/axios";

export const usersAPI = async (userData) => {
    const response = await api.post("/users", userData);
    return response.data;
};