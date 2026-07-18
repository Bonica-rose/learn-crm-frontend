import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";
import RoleRoute from "../components/RoleRoute";
import MainLayout from "../components/layout/MainLayout";

import Unauthorized from "../pages/errors/Unauthorized";
import NotFound from "../pages/errors/NotFound";

import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";

import UsersList from "../pages/users/Users";

import CustomersList from "../pages/customers/Customers";
import AddCustomer from "../pages/customers/AddCustomer";
import EditCustomer from "../pages/customers/EditCustomer";

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

                    <Route element={<RoleRoute allowedRoles={["Admin"]} />}>
                        <Route path="/users" element={<UsersList />} />
                    </Route>

                    <Route element={<RoleRoute allowedRoles={["Admin", "Staff"]} />}>
                        <Route path="/customers" element={<CustomersList />} />
                        <Route path="/customers/add" element={<AddCustomer />} />
                        <Route path="/customers/edit/:id" element={<EditCustomer />} />
                    </Route>

                    <Route path="/unauthorized" element={<Unauthorized />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
