import { useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getDashboardAPI } from "../features/dashboard/dashboardAPI";

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    const [stats, setStats] = useState({});

    const loadDashboard = async () => {
        try {
        const res = await getDashboardAPI();
        setStats(res.dashboardData);
        } catch (error) {
        console.log(error);
        toast.error(
            error.response?.data?.message ||
            "Admin Dashboard data fetching failed!",
        );
        }
    };

    useEffect(() => {
        loadDashboard();
    }, []);

    // console.log(stats);

    return (
        <div className="space-y-8">
        {/* Heading */}
        <PageHeader title="Dashboard" subtitle={`Welcome back, ${user?.name}!`} />

        {/* Statistics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-sm font-medium text-gray-500">Total Users</h2>

            <p className="mt-3 text-3xl font-bold text-blue-600">
                {stats?.totalUsers}
            </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-sm font-medium text-gray-500">Leads</h2>

            <p className="mt-3 text-3xl font-bold text-yellow-500">
                {stats?.totalLeads}
            </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-sm font-medium text-gray-500">Customers</h2>

            <p className="mt-3 text-3xl font-bold text-green-600">
                {stats?.totalCustomers}
            </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-sm font-medium text-gray-500">Inactive</h2>

            <p className="mt-3 text-3xl font-bold text-red-600">
                {stats?.inactiveCustomers}
            </p>
            </div>
        </div>
            
        {/* Quick Actions */}
        <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>

            <div className="flex flex-wrap gap-4">
            <button className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                Add Customer
            </button>

            <button className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700">
                View Customers
            </button>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
