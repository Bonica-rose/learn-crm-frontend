import api from "../../api/axios";

export const getUsersAPI = async (userData) => {
    const response = await api.get("/users", userData);
    return response.data;
};

export const deleteUserAPI = async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
};