import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onLogout } from "../../features/auth/authSlice";
import { logoutAPI } from "../../features/auth/authAPI";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = async () => {
        try {
            await logoutAPI();
            dispatch(onLogout());
            navigate("/");
        } catch (error) {
            console.error(error);
        }        
    };

    const navLinkClass = ({ isActive }) =>
        isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600";

    return (
        <nav className="bg-white shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-700">CRM</div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
                <NavLink to="/dashboard" className={navLinkClass}>
                Dashboard
                </NavLink>

                <NavLink to="/users" className={navLinkClass}>
                Users
                </NavLink>

                <NavLink to="/customers" className={navLinkClass}>
                Customers
                </NavLink>
            </div>

            {/* User */}
            <div className="flex items-center gap-4">
                {/* Stacked Text Container */}
                <div className="flex flex-col text-right">
                {/* Role (e.g., Staff, Admin) */}
                <span className="text-sm font-semibold text-gray-800 capitalize">
                    {user?.role}
                </span>
                {/* Position (e.g., Sales Executive) */}
                <span className="text-xs text-gray-500">
                    {user?.position || user?.job_title}
                </span>
                </div>

                <button
                onClick={handleLogout}
                className="rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                >
                Logout
                </button>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
