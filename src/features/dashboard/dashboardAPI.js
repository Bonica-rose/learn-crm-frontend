import api from "../../api/axios";

export const getDashboardAPI = async () => {
    const response = await api.get("/dashboard/admin");
    return response.data;
};