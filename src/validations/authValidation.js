import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup
        .string()
        .trim()
        .lowercase()
        .email("Invalid email")
        // .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address")
        .required("Email is required"), 

    password: yup
        .string()        
        .required("Password is required"),
});

export const registerSchema = yup.object({
    name: yup
        .string()
        .min(3, "Name must be at least 3 characters")
        .max(30, "Name is too long")
        .matches(
            /^[a-zA-Z ]+$/,
            "Name can only contain letters and space"
        )
        .required("Name is required"),
    email: yup
        .string()
        .trim()
        .lowercase()
        .email("Invalid email")
        // .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address")
        .max(100, "Email is too long")
        .required("Email is required"), 
    password: yup.
        string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});