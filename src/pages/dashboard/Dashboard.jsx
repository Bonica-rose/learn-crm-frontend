import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard";
import StaffDashboard from "./StaffDashboard";

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    switch (user.role) {
        case "Admin":
        return <AdminDashboard />;

        case "Staff":
        return <StaffDashboard />;

        default:
            return (
                <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
                    <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                    Unauthorized
                    </h2>
                </div>
            );
    }
};

export default Dashboard;
