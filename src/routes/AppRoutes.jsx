import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";

import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

import Dashboard from "../pages/Dashboard";
import UsersList from "../pages/users/Users";
// import CustomersList from "../pages/Customers";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<UsersList />} />
                {/* <Route path="/customers" element={<CustomersList />} /> */}
                </Route>
            </Route>
            </Routes>
        </BrowserRouter>
    );
}
