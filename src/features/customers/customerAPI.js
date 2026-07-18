import api from "../../api/axios";

export const getCustomersAPI = async (userData) => {
    const response = await api.get("/customers", userData);
    return response.data;
};

export const deleteCustomerAPI = async (id) => {
    const response = await api.delete(`/customers/${id}`);
    return response.data;
};

export const createCustomerAPI = async (customerData) => {
    const response = await api.post("/customers", customerData);
    return response.data;
};

export const getCustomerAPI = async (id) => {
    const response = await api.get(`/customers/${id}`);
    return response.data;
};

export const updateCustomerAPI = async (id, customerData) => {
    const response = await api.put(`/customers/${id}`, customerData);
    return response.data;
};