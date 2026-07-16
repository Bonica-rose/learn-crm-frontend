import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";

import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

import Dashboard from "../pages/Dashboard";

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
                    {/* <Route path="/customers" element={<CustomerList />} /> */}
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
