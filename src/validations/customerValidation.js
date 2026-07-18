import * as yup from "yup";

export const createCustomerSchema = yup.object({
    name: yup
        .string()
        .required("Name is required"),

    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),

    phone: yup
        .string()
        .required("Phone is required"),

    company: yup
        .string()
        .required("Company is required"),

    address: yup
        .string()
        .required("Address is required"),
});

export const updateCustomerSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    phone: yup.string().required("Phone is required"),
    company: yup.string().required("Company is required"),
    address: yup.string().required("Address is required"),
});