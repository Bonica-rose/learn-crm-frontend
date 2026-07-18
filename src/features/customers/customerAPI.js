import api from "../../api/axios";

// For Admin role
export const getAllCustomersAPI = async (userData) => {
    const response = await api.get("/admin/customers", userData);
    return response.data;
};

export const deleteCustomerForAdminAPI = async (id) => {
    const response = await api.delete(`/admin/customers/${id}`);
    return response.data;
};

export const getCustomerForAdminAPI = async (id) => {
    const response = await api.get(`/admin/customers/${id}`);
    return response.data;
};

export const updateCustomerForAdminAPI = async (id, customerData) => {
    const response = await api.put(`/admin/customers/${id}`, customerData);
    return response.data;
};



// For roles except Admin 
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