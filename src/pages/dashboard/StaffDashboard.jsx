import { useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getDashboardAPI } from "../../features/dashboard/dashboardAPI";

const StaffDashboard = () => {
    const { user } = useSelector((state) => state.auth);

    const [empStats, setEmpStats] = useState({});

    const loadEmpDashboard = async () => {
        try {
            const res = await getDashboardAPI();
            setEmpStats(res.dashboardData);
        } catch (error) {
            console.log(error);
            toast.error(
                error.response?.data?.message ||
                "Employe Dashboard data fetching failed!",
            );
        }
    };

    useEffect(() => {
        loadEmpDashboard();
    }, []);

    // console.log(empStats);
    return (
        <div className="space-y-8">
            {/* Heading */}
            <PageHeader
            title="Dashboard"
            subtitle={`Welcome back, ${user?.name}!`}
            />

            {/* Statistics */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-sm font-medium text-gray-500">My Customers</h2>

                <p className="mt-3 text-3xl font-bold text-blue-600">
                {empStats?.myCustomers}
                </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-sm font-medium text-gray-500">My Leads</h2>

                <p className="mt-3 text-3xl font-bold text-yellow-500">
                {empStats?.myLeads}
                </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-sm font-medium text-gray-500">
                My Inactive Customers
                </h2>

                <p className="mt-3 text-3xl font-bold text-red-600">
                {empStats?.myInactiveCustomers}
                </p>
            </div>
            </div>
        </div>
    );
};

export default StaffDashboard;
